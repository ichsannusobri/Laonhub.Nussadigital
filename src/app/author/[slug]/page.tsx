import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./Author.module.css";
import { authors } from "@/lib/data";
import { getAllPosts } from "@/lib/markdown";

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({
    slug,
  }));
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const author = authors[slug];
  if (!author) {
    notFound();
  }

  // Get all posts and filter by this author
  const allPosts = getAllPosts(['title', 'date', 'slug', 'description', 'category', 'author']);
  const authorPosts = allPosts.filter((post) => post.author === slug);

  return (
    <div className="container">
      <div className={styles.authorLayout}>
        {/* Profile Card */}
        <section className={styles.profileCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={author.avatar} alt={author.name} className={styles.avatar} />
          <div className={styles.info}>
            <h1>{author.name}</h1>
            <p className={styles.role}>{author.role}</p>
            <p className={styles.bio}>{author.bio}</p>
            <div className={styles.socials}>
              {author.socials.twitter && (
                <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Twitter
                </a>
              )}
              {author.socials.linkedin && (
                <a href={author.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Published Articles List */}
        <section className={styles.articlesSection}>
          <h2>Articles by {author.name}</h2>
          {authorPosts.length === 0 ? (
            <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>No articles published yet.</p>
          ) : (
            <div>
              {authorPosts.map((post) => (
                <article key={post.slug} className={styles.articleCard}>
                  <div className={styles.articleMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h3>
                    <Link href={`/article/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className={styles.excerpt}>{post.description}</p>
                  <Link href={`/article/${post.slug}`} className={styles.readMore}>
                    Read Full Article &rarr;
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
