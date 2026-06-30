import Link from "next/link";

export default function LiveTicker({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="live-ticker-container">
      <div className="ticker-label">BREAKING</div>
      <div className="ticker-wrap">
        <div className="ticker-move">
          {posts.map((post, index) => (
            <div key={post.slug} className="ticker-item">
              <span className="ticker-niche">[{post.cpm_niche}]</span>
              <Link href={`/article/${post.slug}`}>{post.title}</Link>
              {index < posts.length - 1 && <span className="ticker-separator">|</span>}
            </div>
          ))}
          {/* Duplicate for seamless infinite scrolling */}
          {posts.map((post, index) => (
            <div key={`${post.slug}-dup`} className="ticker-item">
              <span className="ticker-niche">[{post.cpm_niche}]</span>
              <Link href={`/article/${post.slug}`}>{post.title}</Link>
              {index < posts.length - 1 && <span className="ticker-separator">|</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
