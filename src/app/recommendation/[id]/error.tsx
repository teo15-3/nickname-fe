"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./error.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Image
            src="/assets/img/error/ic_error.svg"
            alt="error icon"
            width="42"
            height="42"
          />
          <h1 className={styles.title}>앗! 다시 하면 돼요.</h1>
          <h2 className={styles.subTitle}>
            현재 주소의 페이지는 유효하지 않아요.
            <br />
            링크를 다시 확인해 주시겠어요?
          </h2>
        </header>
        <section className={styles.imgWrapper}>
          <Image
            src="/assets/img/error/img_jamini3x.png"
            alt="잼민이"
            width="154"
            height="181"
          />
        </section>
        <section className={styles.footer}>
          <Image
            src="/assets/img/error/bt_primary.svg"
            alt="처음으로 돌아가기"
            width="167"
            height="56"
            onClick={() => router.push("/")}
            className={styles.linkButton}
          />
        </section>
      </div>
    </main>
  );
}
