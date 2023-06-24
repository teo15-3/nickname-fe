import styles from "./page.module.scss";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <main className={styles.main}>
      <div className={styles.pageLayout}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            직장에서 사용할 <br />
            귀엽고 깜찍한데 만만치 않은 <br />
            닉네임을 지어주세요.
          </h1>
          <div className={styles.tags}>
            <div className={styles.tag}>왕쎄보이게</div>
            <div className={styles.tag}>그렇지만 귀엽게</div>
            <div className={styles.tag}>초성이 들어가게</div>
            <div className={styles.tag}>초성이 들어가게</div>
            <div className={styles.tag}>초성이 들어가게</div>
          </div>
        </header>
        <section className={styles.sendSection}>
          <div className={styles.inputWrap}>
            <input
              type="text"
              className={styles.input}
              placeholder="닉네임을 지어주세요."
            />
            <button type="button" className={styles.inputClearBtn}>
              x
            </button>
          </div>

          <button className={styles.sendButton} type="button">
            전송
          </button>
        </section>
      </div>
    </main>
  );
}
