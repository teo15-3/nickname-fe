import { useState } from "react";
import Btn from "../Btn/Btn";
import style from "./ChooseNicknameTagStep.module.scss";
import RequestTags from "./RequestTags/RequestTags";
import { REQUSET_PAGE_CONSTANTS } from "@/utils/requestPageConstants";

type ToggleTagFunctionCondition = "add" | "delete";

export type ToggleTagFunctino = (
  condition: ToggleTagFunctionCondition,
  tag: string,
) => void;

const ChooseNicknameTagStep = ({
  onNext,
}: {
  onNext: (tags: string[]) => void;
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleSelectTag: ToggleTagFunctino = (condition, tag) => {
    if (condition === "add") {
      handleAddSelectedTag(tag);
      return;
    }
    handleRemoveSelectedTag(tag);
  };

  const handleAddSelectedTag = (tag: string) => {
    if (selectedTags.length !== REQUSET_PAGE_CONSTANTS.MAXIMUM_TAG_LIMIT) {
      setSelectedTags((prev) => [...prev, tag]);
    }
  };

  const handleRemoveSelectedTag = (tagName: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagName));
  };

  return (
    <section>
      <h1 className={style.title}>어떤 느낌의 닉네임을 원하나요?</h1>
      <h4 className={style.guide}>원하는 태그를 최대 5개까지 선택해주세요 </h4>
      <section className={style.mainSection}>
        <div className={style.tagsSection}>
          <RequestTags
            selectedTags={selectedTags}
            onToggleTag={toggleSelectTag}
          ></RequestTags>
        </div>
        <Btn
          onNext={() => onNext(selectedTags)}
          text="다음"
          disabled={!selectedTags.length}
        ></Btn>
      </section>
    </section>
  );
};

export default ChooseNicknameTagStep;
