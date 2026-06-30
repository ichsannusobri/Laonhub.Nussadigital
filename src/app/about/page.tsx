export default function AboutUs() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Us</h1>
      
      <div style={{ lineHeight: "1.8", color: "var(--color-text-main)", marginTop: "2rem" }}>
        <p style={{ marginBottom: "1.5rem" }}>
          Welcome to <strong>LoanHub</strong>, your trusted destination for comprehensive financial wisdom, loan planning strategies, and insights into achieving a better financial future.
        </p>
        
        <p style={{ marginBottom: "1.5rem" }}>
          Our mission is to demystify complex financial topics—from life insurance secrets to mortgage refinancing and legal asset protection—so that you can make informed, confident decisions about your money.
        </p>

        <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 1rem" }}>Our Editorial Standards</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          We believe in providing high-quality, anti-plagiarized, and well-researched content. While our headlines might catch your eye, our content is designed to deliver genuine value, answering your most pressing financial questions.
        </p>
        
        <p>Thank you for visiting LoanHub. We hope our guides help you secure your financial future!</p>
      </div>
    </div>
  );
}
