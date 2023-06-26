import styles from "./index.module.scss";

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className={styles.tags}>
      {tags.length > 0 &&
        tags.map((tag) => (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        ))}
    </div>
  );
}
