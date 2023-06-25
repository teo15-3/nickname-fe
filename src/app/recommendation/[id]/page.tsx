import styles from "./page.module.scss";
import RequestTitle from "../../../components/recommendation/title";
import Send from "../../../components/recommendation/send";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <main className={styles.main}>
      <div className={styles.pageLayout}>
        <RequestTitle id={params.id} />
        <Send id={params.id} />
      </div>
    </main>
  );
}
