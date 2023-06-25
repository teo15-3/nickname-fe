import styles from "./page.module.scss";
import RequestTitle from "../../../components/recommendation/title";
import Send from "../../../components/recommendation/send";

interface PageProps {
  params: { id: string };
}

async function getData() {
  /* const res = await fetch("http://localhost:3000/mock/recommendation.json", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } */

  return { title: "tt" };
}

export default async function Page({ params }: PageProps) {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.pageLayout}>
        <RequestTitle id={params.id} />
        <Send id={params.id} />
      </div>
    </main>
  );
}
