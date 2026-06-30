import LiveTicker from "@/components/LiveTicker";
import ActiveReaders from "@/components/ActiveReaders";
import AdminForm from "@/components/AdminForm";
import { getAllPosts } from "@/lib/markdown";

export default function AdminDashboard() {
  const latestPosts = getAllPosts(['title', 'slug', 'cpm_niche']).slice(0, 5);

  return (
    <div className="container" style={{ padding: "2rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
      <LiveTicker posts={latestPosts} />
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Admin Dashboard</h1>
          <p style={{ color: "var(--color-text-muted)" }}>Paste your ChatGPT Markdown output here to publish instantly.</p>
        </div>
        <ActiveReaders />
      </div>
      
      <AdminForm />
    </div>
  );
}
