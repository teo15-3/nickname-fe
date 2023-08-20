import { ChangeEvent, FormEvent, useState } from "react";
import style from "./RequirementDetailStep.module.scss";
import Image from "next/image";
import {
  REQUESTPAGE_COMMON_IMAGE_PATH,
  REQUSET_PAGE_CONSTANTS,
} from "@/utils/requestPageConstants";
import Btn from "../Btn/Btn";
import UserRequirementPill from "./UserRequirementPill/UserRequirementPill";
import CheckBox from "../CheckBox/CheckBox";

const RequirementDetailStep = ({
  onNext,
}: {
  onNext: ({
    postPublic,
    postDetail,
  }: {
    postPublic: boolean;
    postDetail: string[];
  }) => void;
}) => {
  const [userRequirement, setuserRequirement] = useState("");

  const [userRequirements, setUserRequirements] = useState<string[]>([]);

  const [isPublic, setIsPublic] = useState(false);

  const hanldeToggleisPublic = () => {
    setIsPublic((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      userRequirements.length ===
      REQUSET_PAGE_CONSTANTS.MAXIMUM_REQUIREMENT_LIMIT
    ) {
      return;
    }
    setUserRequirements((prev) => [...prev, userRequirement.trim()]);
    setuserRequirement("");
  };

  const handleRemoveUserRequirement = (usersValue: string) => {
    setUserRequirements((prev) =>
      prev.filter((requirement) => requirement !== usersValue),
    );
  };

  return (
    <section>
      <h1 className={style.title}>
        구체적인 요구사항이 있다면 <br /> 작성해 주세요.
      </h1>
      <div className={style.guideSection}>
        <h4 className={style.guide}>
          예시 <br />
          #영어로 지어주세요. <br /> #'kiwi'라는 단어가 들어가게 해주세요.
        </h4>
      </div>

      <div className={style.requirementsSection}>
        <h5 className={style.inputGuide}>30자 이내, 3개까지 등록 가능해요.</h5>

        <form onSubmit={handleSubmit} className={style.inputSection}>
          <input
            maxLength={30}
            required
            value={userRequirement}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setuserRequirement(e.target.value)
            }
            className={style.requirementsInput}
            type="text"
            placeholder="요청사항을 입력하세요"
          ></input>
          {userRequirement && (
            <Image
              onClick={() => {
                setuserRequirement("");
              }}
              className={style.delete24}
              alt="delete24"
              width={24}
              height={24}
              src={`${REQUESTPAGE_COMMON_IMAGE_PATH}ic-delete-24dp.png`}
            ></Image>
          )}
          <button type="submit" className={style.requirementsButton}>
            등록
          </button>
        </form>

        <ul className={style.requirementsUl}>
          {userRequirements &&
            userRequirements.map((detail, idx) => {
              return (
                <UserRequirementPill
                  onDelete={handleRemoveUserRequirement}
                  key={idx}
                  requirement={detail}
                ></UserRequirementPill>
              );
            })}
        </ul>

        <div className={style.isPublicSection}>
          <CheckBox
            onChecked={hanldeToggleisPublic}
            isCheckced={isPublic}
            describe="비공개로 업로드 하기"
          ></CheckBox>
          <h5 className={style.decribeIsPublic}>
            링크를 가진 사람만 내 요청을 볼 수 있어요.
          </h5>
        </div>

        <Btn
          disabled={false}
          onNext={() =>
            onNext({ postDetail: userRequirements, postPublic: isPublic })
          }
          text="요청완료"
        ></Btn>
      </div>
    </section>
  );
};

export default RequirementDetailStep;
