import styles from "./page.module.scss";
import RequestTitle from "../../../components/recommendation/title";
import Send from "../../../components/recommendation/send";
import { getData } from "../../../lib/api/recommendation";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const data = await getData(params.id);

  return (
    <main className={styles.main}>
      <div className={styles.pageLayout}>
        <RequestTitle data={data} />
        <Send id={params.id} />
      </div>
    </main>
  );
}
