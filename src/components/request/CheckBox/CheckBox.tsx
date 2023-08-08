import Image from "next/image";
import style from "./CheckBox.module.scss";
import { REQUESTPAGE_COMMON_IMAGE_PATH } from "@/utils/requestPageConstants";
import { useState } from "react";

const CheckBox = ({
  isCheckced,
  describe,
  onChecked,
}: {
  isCheckced: boolean;
  describe?: string;
  onChecked: () => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={style.checkBox}>
      {isCheckced ? (
        <Image
          width={18}
          height={18}
          src={`${REQUESTPAGE_COMMON_IMAGE_PATH}checkbox-checked.png`}
          alt="checked"
        ></Image>
      ) : (
        <Image
          width={18}
          height={18}
          src={`${REQUESTPAGE_COMMON_IMAGE_PATH}checkbox-inital.png`}
          alt="notChecked"
        ></Image>
      )}
      <input
        onChange={() => onChecked()}
        type="checkbox"
        checked={isCheckced}
      />
      {describe}
    </label>
  );
};

export default CheckBox;
