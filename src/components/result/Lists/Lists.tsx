import List from "../List/List";
import style from "./Lists.module.scss";

const Lists = ({ lists, mykey }: { lists: string[]; mykey: string }) => {
  return (
    <ul className={style.listUpContainer}>
      {lists.map((list, i) => (
        <List mykey={mykey} key={`${i.toString()}`} list={list} />
      ))}
    </ul>
  );
};

export default Lists;
