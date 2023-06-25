import Image from "next/image";
import Link from "next/link";
import styles from "./completion.module.scss";

export default function Completion() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.nametagImg}
            src="/assets/img/img_nametag.png"
            alt="nametag"
            width="150"
            height="175"
          />
        </div>

        <div className={styles.title}>
          <strong className={styles.highlightText}>유니크</strong>하면서 <br />
          <strong className={styles.highlightText}>모던</strong>하고{" "}
          <strong className={styles.highlightText}>대중적</strong>이지만 <br />
          <strong className={styles.highlightText}>시크</strong>하고{" "}
          <strong className={styles.highlightText}>유머러스</strong>한 <br />
          닉네임 지어줘
          <div className={styles.sendText}>전송완료!</div>
        </div>
      </section>

      <Link href="/creation">
        <Image
          src="/assets/img/bt_request.svg"
          alt="나도 요청하기"
          width="224"
          height="56"
          className={styles.linkButton}
        />
      </Link>
    </main>
  );
}
