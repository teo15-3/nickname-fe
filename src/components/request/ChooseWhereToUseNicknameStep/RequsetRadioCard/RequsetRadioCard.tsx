import style from "./RequestRadioCard.module.scss";

import Image from "next/image";

import { REQUESTPAGE_COMMON_IMAGE_PATH } from "@/utils/requestPageConstants";
import { ChangeEvent } from "react";

const RequsetRadioCard = ({
  onChangeValue,
  value,
  name,
  imgPath,
  categoryName,
  description,
  isSelected,
}: {
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  imgPath: string;
  categoryName: string;
  description?: string;
  isSelected: boolean;
}) => {
  return (
    <li className={`${style.wrapper} ${isSelected ? style.checked : ""}`}>
      <label className={style.card}>
        <div className={style.cardTop}>
          <h3 className={style.title}>{categoryName}</h3>

          <div className={style.checkBox}>
            {isSelected ? (
              <Image
                width={24}
                height={24}
                alt={"requsetCheckBox"}
                src={`${REQUESTPAGE_COMMON_IMAGE_PATH}ic- check-box-selected-24dp.png`}
              ></Image>
            ) : (
              <Image
                width={24}
                height={24}
                alt={"requsetCheckBox"}
                src={`${REQUESTPAGE_COMMON_IMAGE_PATH}ic- check-box-deselected-24dp.png`}
              ></Image>
            )}
          </div>
        </div>

        {description && (
          <h5 className={style.description}>{`ex) ${description}`}</h5>
        )}

        <input
          onChange={onChangeValue}
          name={name}
          value={value}
          type="radio"
        ></input>

        <div className={style.cardBottom}>
          <Image
            width={64}
            height={64}
            alt={`${categoryName} image`}
            src={imgPath}
          ></Image>
        </div>
      </label>
    </li>
  );
};

export default RequsetRadioCard;
