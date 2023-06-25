import Image from "next/image";
import style from "./List.module.scss";

const COMMON_IMG_FILE_PATH = "/assets/img/resultPageEssets/";

const List = ({ list, mykey }: { list: string; mykey: string }) => {
  const handleDeleteBtn = async (mykey: string, nickname: string) => {
    const res = await fetch(
      `https://api.fire-lighter.kr/nickname/${mykey}/nickname-received?nickname=${nickname}`,
      {
        method: "DELETE",
      },
    );
    // 나머지 코드 작성
  };

  return (
    <li className={style.listContainer}>
      <div className={style.list}>
        <div className={style.listItemContaier}>
          <h5 className={style.listItemTitle}>{list}</h5>
          <button
            type="button"
            onClick={() => handleDeleteBtn(mykey, list)}
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
