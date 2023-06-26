"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

import getIntroData from "../lib/api/intro/index";

export default function Home() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const getUserCount = async () => {
      try {
        const res = await getIntroData();
        setUserCount(res.userCount);
      } catch (e) {
        return 0;
      }
    };

    getUserCount();
  }, []);

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
        <section className={styles.section}>
          <div className={styles.ImgWrapper}>
            <div className={styles.responsiveImage}>
              <Image
                src="/assets/img/intro/img_jamini.png"
                alt="잼민이"
                layout="fill"
                objectFit="contain"
                className={styles.jaminiImg}
              />
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.description}>
              지금까지 <b className={styles.highlightText}>{userCount}</b>
              명이 <br />
              유니크하고 모던하고 대중적이지만 시크하고 유머러스한 <br />{" "}
              닉네임을 얻어갔습니다.
            </div>
            <Link href="/creation">
              <div className={styles.nickNameImgWrapper}>
                <div className={styles.nickNameImg}>
                  <Image
                    src="/assets/img/intro/bt_primary_start.svg"
                    alt="닉네임 지어줘"
                    layout="fill"
                    objectFit="contain"
                    className={styles.linkButton}
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
