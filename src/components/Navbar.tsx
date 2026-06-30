import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Loan<span>Hub</span>
        </Link>
        
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/category/loans">Personal Loans</Link>
          <Link href="/category/mortgage">Mortgages</Link>
          <Link href="/category/guides">Financial Guides</Link>
        </nav>
        
        <div className={styles.actions}>
          <Link href="/category/guides" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
