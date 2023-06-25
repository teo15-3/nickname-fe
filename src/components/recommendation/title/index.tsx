import styles from "./index.module.scss";
import Tags from "../tags";

interface RequestTitleProps {
  title: string;
  category: string;
  tags: string[];
}

export default async function RequestTitle({
  data,
}: {
  data: RequestTitleProps;
}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {data.category} 사용할 <br />
        {data.title} <br />
        닉네임을 지어주세요.
      </h1>
      <Tags tags={data.tags || []} />
    </header>
  );
}
