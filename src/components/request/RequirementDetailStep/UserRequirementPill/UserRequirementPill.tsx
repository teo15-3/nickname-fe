import Image from "next/image";
import style from "./UserRequirementPill.module.scss";
import { REQUESTPAGE_COMMON_IMAGE_PATH } from "@/utils/requestPageConstants";

const UserRequirementPill = ({
  requirement,
  onDelete,
}: {
  requirement: string;
  onDelete: (idx: string) => void;
}) => {
  return (
    <li className={style.list}>
      <div className={style.pill}>
        <span>{`"${requirement}"`} </span>
        <Image
          onClick={() => onDelete(requirement)}
          className={style.delete16}
          alt="delete16"
          width={16}
          height={16}
          src={`${REQUESTPAGE_COMMON_IMAGE_PATH}bt-delete-16dp.png`}
        ></Image>
      </div>
    </li>
  );
};

export default UserRequirementPill;
