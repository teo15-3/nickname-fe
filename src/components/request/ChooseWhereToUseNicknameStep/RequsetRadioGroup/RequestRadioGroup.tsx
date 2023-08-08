import style from "./RequestRadioGroup.module.scss";
import RequsetRadioCard from "../RequsetRadioCard/RequsetRadioCard";

import { REQUSET_PAGE_CONSTANTS } from "@/utils/requestPageConstants";
import { ChangeEvent } from "react";

const RequestRadioGroup = ({
  selected,
  onChangeValue,
}: {
  selected: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { EACH_CATEGORY_INFO } = REQUSET_PAGE_CONSTANTS;

  return (
    <ul className={style.wrapper}>
      {EACH_CATEGORY_INFO.map(({ category, categoryName, path, example }) => (
        <RequsetRadioCard
          value={category}
          onChangeValue={onChangeValue}
          isSelected={selected === category}
          categoryName={categoryName}
          imgPath={path}
          name="categoryGroup"
          description={example}
        ></RequsetRadioCard>
      ))}
    </ul>
  );
};

export default RequestRadioGroup;
