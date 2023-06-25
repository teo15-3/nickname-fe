import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

import getIntroData from "../lib/api/intro/index";

export default function Home() {
  const getUserCount = async () => {
    try {
      const res = await getIntroData();
      return res.userCount;
    } catch (e) {
      return 0;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.introPageLayout}>
        <header>
          <h1 className={styles.title}>
            <strong className={styles.highlightText}>유니크</strong>하면서{" "}
            <br />
            <strong className={styles.highlightText}>모던</strong>하고{" "}
            <strong className={styles.highlightText}>대중적</strong>이지만{" "}
            <br />
            <strong className={styles.highlightText}>시크</strong>하고{" "}
            <strong className={styles.highlightText}>유머러스</strong>한 <br />
            닉네임 지어줘
          </h1>
        </header>
        <section>
          <Image
            src="/assets/img/intro/img_jamini.png"
            alt="잼민이"
            width="350"
            height="356"
            className={styles.jaminiImg}
          />
          <div className={styles.footer}>
            <div className={styles.description}>
              지금까지 <b className={styles.highlightText}>{getUserCount()}</b>
              명이 <br />
              유니크하고 모던하고 대중적이지만 시크하고 유머러스한 <br />{" "}
              닉네임을 얻어갔습니다.
            </div>
            <Link href="/creation">
              <Image
                src="/assets/img/intro/bt_primary.svg"
                alt="닉네임 지어줘"
                width="167"
                height="56"
                className={styles.linkButton}
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
