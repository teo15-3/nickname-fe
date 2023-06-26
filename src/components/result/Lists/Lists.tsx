import List from "../List/List";
import style from "./Lists.module.scss";

const Lists = ({
  handleDelete,
  lists,
  mykey,
}: {
  handleDelete: (a: string, b: string) => Promise<void>;
  lists: string[];
  mykey: string;
}) => {
  return (
    <ul className={style.listUpContainer}>
      {lists.map((list, i) => (
        <List
          handleDelete={handleDelete}
          mykey={mykey}
          key={`${i.toString()}`}
          list={list}
        />
      ))}
    </ul>
  );
};

export default Lists;
