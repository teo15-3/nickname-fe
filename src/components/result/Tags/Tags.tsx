import Tag from "../Tag/Tag";
import style from "./Tags.module.scss";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <ul className={style.tags}>
      {tags.map((tag, i) => {
        return <Tag tag={tag} key={`${i.toString()} `} />;
      })}
    </ul>
  );
};

export default Tags;
