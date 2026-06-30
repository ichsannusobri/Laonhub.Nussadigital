import styles from "./Ads.module.css";

export default function SidebarAd() {
  return (
    <div className={`${styles.adPlaceholder} ${styles.sidebarAd}`}>
      <span className={styles.adLabel}>Advertisement</span>
      <div className={styles.adContent}>
        <p>Sticky Sidebar AdSlot (300x600)</p>
      </div>
    </div>
  );
}
