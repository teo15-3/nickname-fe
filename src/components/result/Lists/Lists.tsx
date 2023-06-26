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
  console.log(lists);
  return (
    <ul className={style.listUpContainer}>
      {lists.length > 0 ? (
        lists.map((list, i) => (
          <List
            handleDelete={handleDelete}
            mykey={mykey}
            key={`${i.toString()}`}
            list={list}
          />
        ))
      ) : (
        <div className={style.descContainer}>
          <span className={style.desc}>
            링크를 받은 사람이 추천을 하면
            <br /> 목록이 보여요!
          </span>
        </div>
      )}
    </ul>
  );
};

export default Lists;
