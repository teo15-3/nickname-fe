import Image from "next/image";
import { REQUESTPAGE_COMMON_IMAGE_PATH } from "@/utils/requestPageConstants";

import style from "./DeleteBtn.module.scss";

const DeleteBtn = ({
  size,
  onDelete,
}: {
  size: 16 | 24;
  onDelete: () => void;
}) => {
  return (
    <Image
      className={style.icon}
      onClick={() => onDelete()}
      alt="delIcon"
      src={
        size === 16
          ? `${REQUESTPAGE_COMMON_IMAGE_PATH}bt-delete-16dp.png`
          : `${REQUESTPAGE_COMMON_IMAGE_PATH}ic-delete-24dp.png`
      }
      width={size}
      height={size}
    ></Image>
  );
};

export default DeleteBtn;
