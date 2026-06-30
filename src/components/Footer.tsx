import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brand}>
          <h3>Loan<span>Hub</span></h3>
          <p>Your ultimate destination for financial wisdom, loan planning, and achieving a better financial future.</p>
        </div>
        
        <div className={styles.links}>
          <h4>Categories</h4>
          <Link href="/category/loans">Loans</Link>
          <Link href="/category/credit-cards">Credit Cards</Link>
          <Link href="/category/mortgages">Mortgages</Link>
          <Link href="/category/investing">Investing</Link>
        </div>
        
        <div className={styles.links}>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} LoanHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
