import styles from "./Ads.module.css";

export default function StickyBottomAd() {
  return (
    <div className={styles.stickyBottomWrapper}>
      <div className={styles.adPlaceholder}>
        <span className={styles.adLabel}>Advertisement</span>
        <div className={styles.adContent}>
          {/* AdSense Code Will Go Here */}
          <p>AdSense Auto Ads / Anchor Ad Slot</p>
        </div>
      </div>
    </div>
  );
}
