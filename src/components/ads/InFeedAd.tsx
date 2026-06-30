import styles from "./Ads.module.css";

export default function InFeedAd() {
  return (
    <div className={`${styles.adPlaceholder} ${styles.inFeedAd}`}>
      <span className={styles.adLabel}>Advertisement</span>
      <div className={styles.adContent}>
        <p>In-Feed Native AdSlot</p>
      </div>
    </div>
  );
}
