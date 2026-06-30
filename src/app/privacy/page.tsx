export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Privacy Policy</h1>
      <p style={{ marginBottom: "2rem", color: "var(--color-text-muted)" }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <div style={{ lineHeight: "1.8", color: "var(--color-text-main)" }}>
        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us when you use our website, including when you sign up for our newsletter or contact us. We also use cookies to improve your browsing experience and serve relevant ads via Google AdSense.</p>
        
        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>2. Google AdSense & Cookies</h2>
        <p>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet.</p>
        <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>Ads Settings</a>.</p>

        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>3. How We Use Your Information</h2>
        <p>We use the information we collect to operate and improve our website, respond to your inquiries, and analyze traffic to provide better content.</p>

        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
      </div>
    </div>
  );
}
