import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <main>
      <div className={styles.layout}>
        <div className={styles.loading}>...</div>
        <div className={styles.title}>로딩중</div>
        <div className={styles.subTitle}>잠시만 기다려 주세요</div>
      </div>
    </main>
  );
}
