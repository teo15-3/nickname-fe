import Image from "next/image";
import style from "./List.module.scss";

const COMMON_IMG_FILE_PATH = "/assets/img/resultPageEssets/";

const List = ({
  handleDelete,
  list,
  mykey,
}: {
  handleDelete: (a: string, b: string) => Promise<void>;
  list: string;
  mykey: string;
}) => {
  return (
    <li className={style.listContainer}>
      <div className={style.list}>
        <div className={style.listItemContaier}>
          <h5 className={style.listItemTitle}>{list}</h5>
          <button
            type="button"
            onClick={() => handleDelete(mykey, list)}
            className={style.listItemIcon}
          >
            <Image
              src={`${COMMON_IMG_FILE_PATH}Trash.svg`}
              width={24}
              height={24}
              alt="icon"
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default List;
