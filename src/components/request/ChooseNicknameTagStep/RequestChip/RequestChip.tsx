import { ToggleTagFunctino } from "../ChooseNicknameTagStep";
import style from "./RequsetChip.module.scss";

const RequestChip = ({
  tagName,
  isSelected,
  onToggleTag,
}: {
  tagName: string;
  isSelected: boolean;
  onToggleTag: ToggleTagFunctino;
}) => {
  return (
    <li
      onClick={() => {
        isSelected
          ? onToggleTag("delete", tagName)
          : onToggleTag("add", tagName);
      }}
      className={isSelected ? `${style.chip} ${style.select}` : `${style.chip}`}
    >
      <span>{tagName}</span>
    </li>
  );
};

export default RequestChip;
