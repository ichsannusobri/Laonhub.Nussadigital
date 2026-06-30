export default function TermsOfService() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Terms of Service</h1>
      <p style={{ marginBottom: "2rem", color: "var(--color-text-muted)" }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <div style={{ lineHeight: "1.8", color: "var(--color-text-main)" }}>
        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>2. Disclaimer of Financial Advice</h2>
        <p>The information provided on this website is for general informational and educational purposes only. It does not constitute financial, legal, or professional advice. Always consult with a certified professional before making any financial decisions.</p>

        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>3. External Links</h2>
        <p>Our website may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>

        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>4. Modifications</h2>
        <p>We reserve the right to modify or replace these Terms at any time. Your continued use of the site after any such changes constitutes your acceptance of the new Terms.</p>
      </div>
    </div>
  );
}
