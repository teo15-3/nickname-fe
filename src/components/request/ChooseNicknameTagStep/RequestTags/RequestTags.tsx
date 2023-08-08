import { ToggleTagFunctino } from "../ChooseNicknameTagStep";
import RequestChip from "../RequestChip/RequestChip";
import style from "./RequestTags.module.scss";

import { REQUSET_PAGE_CONSTANTS } from "@/utils/requestPageConstants";

const RequestTags = ({
  selectedTags,
  onToggleTag,
}: {
  selectedTags: string[];
  onToggleTag: ToggleTagFunctino;
}) => {
  return (
    <ul className={style.wrapper}>
      {REQUSET_PAGE_CONSTANTS.NICKNAME_TAGS.map((tag, idx) => (
        <RequestChip
          isSelected={selectedTags.includes(tag)}
          onToggleTag={onToggleTag}
          key={idx}
          tagName={tag}
        ></RequestChip>
      ))}
    </ul>
  );
};

export default RequestTags;
