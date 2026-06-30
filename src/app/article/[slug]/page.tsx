import Link from "next/link";
import ReactMarkdown, { Components } from "react-markdown";
import styles from "./Article.module.css";
import InArticleAd from "@/components/ads/InArticleAd";
import SidebarAd from "@/components/ads/SidebarAd";
import { getPostBySlug, getPostSlugs } from "@/lib/markdown";

export function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.md$/, ''),
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = getPostBySlug(slug, ['title', 'date', 'content', 'category', 'cpm_niche']);
  
  // Custom markdown components to inject Ads automatically after specific elements
  let paragraphCount = 0;
  
  const MarkdownComponents: Components = {
    p: ({ children }) => {
      paragraphCount++;
      // Inject an InArticleAd every 2 paragraphs
      const shouldShowAd = paragraphCount > 0 && paragraphCount % 2 === 0;
      
      return (
        <>
          <p>{children}</p>
          {shouldShowAd && <InArticleAd />}
        </>
      );
    }
  };

  return (
    <div className="container">
      <div className={styles.articleLayout}>
        <article className={styles.mainContent}>
          <header className={styles.articleHeader}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.date}>{post.date}</span>
            </div>
            <h1>{post.title}</h1>
            <div className={styles.author}>
              <div className={styles.authorAvatar}></div>
              <div>
                <strong>By Editorial Team</strong>
                <span>Niche: {post.cpm_niche}</span>
              </div>
            </div>
          </header>

          <InArticleAd />

          <div className={styles.articleBody}>
            <ReactMarkdown components={MarkdownComponents}>
              {post.content}
            </ReactMarkdown>
            
            <div className={styles.conclusion}>
              <h3>Disclaimer</h3>
              <p>This article is intended for informational purposes only and does not constitute professional financial or legal advice. Please consult with a certified expert in your jurisdiction before making any major financial decisions.</p>
            </div>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <SidebarAd />
          
          <div className={styles.widget}>
            <h3>Related Articles</h3>
            <ul className={styles.relatedList}>
              <li><Link href="/article/01-life-insurance-secrets">Life Insurance Secrets</Link></li>
              <li><Link href="/article/02-accident-attorney-mistakes">Accident Attorney Tips</Link></li>
              <li><Link href="/article/03-crypto-wealth-management">Crypto Wealth Strategies</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
