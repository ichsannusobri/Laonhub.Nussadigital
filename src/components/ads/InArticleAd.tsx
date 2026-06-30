import styles from "./Ads.module.css";

export default function InArticleAd() {
  return (
    <div className={`${styles.adPlaceholder} ${styles.inArticleAd}`}>
      <span className={styles.adLabel}>Advertisement</span>
      <div className={styles.adContent}>
        <p>In-Article AdSlot (Responsive)</p>
      </div>
    </div>
  );
}
