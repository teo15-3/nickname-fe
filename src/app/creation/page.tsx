import Image from "next/image";
import Link from "next/link";
import styles from "./creation.module.scss";
import CreationForm from "../../components/creationForm/creationForm";

export default function Create() {
  return (
    <main className={styles.main}>
      <div className={styles.creationPageLayout}>
        <Image
          src="/assets/img/creation/speech_bubble.svg"
          alt="말풍선"
          width={258}
          height={136}
        />
        <CreationForm />
      </div>
    </main>
  );
}
