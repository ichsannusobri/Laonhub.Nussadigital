import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import styles from "../../Home.module.css";
import SidebarAd from "@/components/ads/SidebarAd";

export const dynamicParams = true;

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const formattedCategory = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const allPosts = getAllPosts(['title', 'date', 'slug', 'description', 'category', 'cpm_niche']);
  
  const filteredPosts = allPosts.filter(post => {
    const searchSlug = slug.toLowerCase();
    const cat = (post.category || '').toLowerCase();
    const niche = (post.cpm_niche || '').toLowerCase();
    const title = (post.title || '').toLowerCase();
    
    // Fuzzy matching for our specific navbar/footer links
    if (searchSlug === 'loans' && (cat.includes('loan') || niche.includes('loan') || title.includes('loan'))) return true;
    if (searchSlug === 'mortgage' && (cat.includes('mortgage') || niche.includes('mortgage') || cat.includes('home') || niche.includes('home') || title.includes('mortgage') || title.includes('home'))) return true;
    if (searchSlug === 'mortgages' && (cat.includes('mortgage') || niche.includes('mortgage') || cat.includes('home') || niche.includes('home') || title.includes('mortgage') || title.includes('home'))) return true;
    if (searchSlug === 'credit-cards' && (cat.includes('credit') || niche.includes('credit') || title.includes('credit'))) return true;
    if (searchSlug === 'investing' && (cat.includes('invest') || niche.includes('wealth') || niche.includes('crypto') || cat.includes('crypto') || title.includes('crypto') || title.includes('wealth'))) return true;
    
    // Sidebar specific fuzzy matching
    if (searchSlug === 'life-insurance' && (cat.includes('insurance') || niche.includes('insurance') || title.includes('insurance'))) return true;
    if (searchSlug === 'legal' && (cat.includes('legal') || cat.includes('attorney') || niche.includes('attorney') || title.includes('attorney') || title.includes('law'))) return true;
    
    // Guides is a special catch-all category
    if (searchSlug === 'guides') return true;
    
    // Direct match
    return cat.includes(searchSlug) || niche.includes(searchSlug);
  });

  return (
    <div className="container" style={{ padding: "3rem 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", borderBottom: "2px solid var(--color-primary)", paddingBottom: "1rem", display: "inline-block" }}>
        Category: {formattedCategory}
      </h1>
      
      <div className={styles.homeLayout}>
        <div className={styles.mainFeed}>
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--color-text-muted)" }}>
              <h3 style={{ marginBottom: "1rem" }}>No articles found in this category yet.</h3>
              <p>Check back later or browse our other guides.</p>
              <Link href="/" className="btn btn-primary" style={{ marginTop: "2rem", display: "inline-block" }}>Back to Home</Link>
            </div>
          ) : (
            <div className={styles.articleList}>
              {filteredPosts.map((article) => (
                <div key={article.slug}>
                  <article className={styles.articleCard} style={{ marginBottom: "1.5rem" }}>
                    <div className={styles.articleMeta}>
                      <span className={styles.category}>{article.category}</span>
                      <span className={styles.date}>{article.date}</span>
                    </div>
                    <h3>
                      <Link href={`/article/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p>{article.description}</p>
                    <Link href={`/article/${article.slug}`} className={styles.readMore}>
                      Read Full Article &rarr;
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className={styles.sidebar}>
          <SidebarAd />
        </aside>
      </div>
    </div>
  );
}
