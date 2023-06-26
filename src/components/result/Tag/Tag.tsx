import style from "./Tag.module.scss";

const Tag = ({ tag }: { tag: string }) => {
  return <li className={style.tag}>{tag}</li>;
};

export default Tag;
