"use client";

import { useState } from "react";

export default function AdminForm() {
  const [pin, setPin] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error" | "loading" | null, message: string }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Publishing..." });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin, title, slug, content }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: `Published successfully! View it at /article/${data.slug}` });
        setTitle("");
        setSlug("");
        setContent("");
      } else {
        setStatus({ type: "error", message: data.error || "Failed to publish." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "A network error occurred." });
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
  };

  return (
    <>
      {status.type && (
        <div style={{
          padding: "1rem", 
          marginBottom: "2rem", 
          borderRadius: "8px",
          backgroundColor: status.type === 'error' ? '#fee2e2' : status.type === 'success' ? '#dcfce7' : '#e0e7ff',
          color: status.type === 'error' ? '#991b1b' : status.type === 'success' ? '#166534' : '#3730a3'
        }}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ padding: "1.5rem", border: "1px solid var(--color-border)", borderRadius: "8px", backgroundColor: "#f8fafc" }}>
          <label htmlFor="pin" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#334155" }}>Admin Security PIN</label>
          <input 
            type="password" 
            id="pin" 
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid #cbd5e1", outline: "none" }} 
            placeholder="Enter the 4-digit PIN"
            required 
          />
        </div>

        <div>
          <label htmlFor="title" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Article Title</label>
          <input 
            type="text" 
            id="title" 
            value={title}
            onChange={handleTitleChange}
            style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)", outline: "none" }} 
            placeholder="e.g. 7 Hidden Life Insurance Secrets"
            required 
          />
        </div>

        <div>
          <label htmlFor="slug" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>URL Slug (Auto-generated)</label>
          <input 
            type="text" 
            id="slug" 
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)", outline: "none", backgroundColor: "#f1f5f9" }} 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="content" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Markdown Content (Including Frontmatter)</label>
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
            Paste the raw output from ChatGPT here. Make sure it includes the `---` blocks at the top.
          </p>
          <textarea 
            id="content" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20} 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)", outline: "none", resize: "vertical", fontFamily: "monospace" }} 
            placeholder="---\ntitle: 'Title'\n...\n---\n\n## Content goes here..."
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={status.type === 'loading'}
          style={{ marginTop: "1rem", opacity: status.type === 'loading' ? 0.7 : 1 }}
        >
          {status.type === 'loading' ? 'Publishing...' : 'Publish Article'}
        </button>
      </form>
    </>
  );
}
