import styles from "./index.module.scss";
import Tags from "../tags";

interface RequestTitleProps {
  id: string;
}

export default async function RequestTitle({ id }: RequestTitleProps) {
  const tags: string[] = ["왕쎄보이게", "그렇지만 귀엽게"];

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        직장에서 사용할 <br />
        귀엽고 깜찍한데 만만치 않은 <br />
        닉네임을 지어주세요.
      </h1>
      <Tags tags={tags || []} />
    </header>
  );
}
