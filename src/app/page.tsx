import Link from "next/link";
import styles from "./Home.module.css";
import InFeedAd from "@/components/ads/InFeedAd";
import SidebarAd from "@/components/ads/SidebarAd";
import LiveTicker from "@/components/LiveTicker";
import ActiveReaders from "@/components/ActiveReaders";
import { getAllPosts } from "@/lib/markdown";

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'description', 'category', 'cpm_niche']);

  return (
    <div className="container">
      <div style={{ marginTop: "1rem" }}>
        <LiveTicker posts={allPosts.slice(0, 5)} />
      </div>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ActiveReaders />
          <h1>Financial, Legal, & Insurance Secrets Unveiled</h1>
          <p>Learn asset protection strategies, maximize insurance claims, and build your wealth with our exclusive guides.</p>
          <Link href="/category/guides" className="btn btn-primary">Read Latest Guide</Link>
        </div>
      </section>

      <div className={styles.homeLayout}>
        <div className={styles.mainFeed}>
          <h2>Latest Articles</h2>
          <div className={styles.articleList}>
            {allPosts.map((article, index) => (
              <div key={article.slug}>
                {/* Insert InFeedAd every 2 articles */}
                {index > 0 && index % 2 === 0 && (
                  <div className={styles.adWrapper}>
                    <InFeedAd />
                  </div>
                )}
                
                <article className={styles.articleCard}>
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
          
          <div className={styles.pagination}>
            <Link href="/category/guides" className="btn" style={{ display: "inline-block", background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-main)" }}>
              Load More Articles
            </Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.widget}>
            <h3>Popular Topics</h3>
            <ul className={styles.topicList}>
              <li><Link href="/category/life-insurance">Life Insurance</Link></li>
              <li><Link href="/category/legal">Car Accident Attorney</Link></li>
              <li><Link href="/category/investing">Crypto Wealth Management</Link></li>
              <li><Link href="/category/mortgage">Mortgage Refinancing</Link></li>
            </ul>
          </div>
          
          <SidebarAd />
        </aside>
      </div>
    </div>
  );
}
