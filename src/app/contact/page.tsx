export default function ContactUs() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", textAlign: "center" }}>Contact Us</h1>
      <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "3rem" }}>
        Have questions, feedback, or business inquiries? We'd love to hear from you.
      </p>
      
      <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Name</label>
          <input type="text" id="name" name="name" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)", outline: "none" }} required />
        </div>
        
        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Email</label>
          <input type="email" id="email" name="email" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)", outline: "none" }} required />
        </div>
        
        <div>
          <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Message</label>
          <textarea id="message" name="message" rows={5} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)", outline: "none", resize: "vertical" }} required></textarea>
        </div>
        
        <button type="button" className="btn btn-primary" style={{ marginTop: "1rem" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
