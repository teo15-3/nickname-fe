import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>
          <strong>유니크</strong>하면서 <br />
          <strong>모던</strong>하고 <strong>대중적</strong>이지만 <br />
          <strong>시크</strong>하고 <strong>유머러스</strong>한 <br />
          닉네임 지어줘
        </h1>
      </header>
      <section>
        <div>
          <Image
            src="/assets/img/img_jamini.png"
            alt="잼민이"
            width="350"
            height="356"
          />
        </div>
        <div>
          <div>
            지금까지 <b>314</b>명이 유니크하고 모던하고 대중적이지만 시크하고
            유머러스한 닉네임을 얻어갔습니다.
          </div>
          <Link href="/create">
            <button type="button">닉네임 지어줘</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
