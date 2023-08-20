"use client";

import ProgressBar from "@/components/request/Progress/ProgressBar/ProgressBar";
import style from "./request.module.scss";
import ChooseWhereToUseNicknameStep from "@/components/request/ChooseWhereToUseNicknameStep/ChooseWhereToUseNicknameStep";
import { useEffect, useState } from "react";
import ChooseNicknameTagStep from "@/components/request/ChooseNicknameTagStep/ChooseNicknameTagStep";
import RequirementDetailStep from "@/components/request/RequirementDetailStep/RequirementDetailStep";
import axios from "@/lib/api/index";
import Bottomsheet from "@/components/request/Bottomsheet/Bottomsheet";

export interface ProcessStatusI {
  step: number;
  isDone: boolean;
  userValue?: string;
}

export type WhereValues = "sns" | "game" | "everywhere" | "company" | "";

interface RequestUserValuesI {
  postWhere: WhereValues;
  postTags: string[];
  postDetail: string[];
  postPublic: boolean;
}

const ALLSTEP_STATUS_INITIAL_STATE: ProcessStatusI[] = [
  { step: 1, isDone: false },
  {
    step: 2,
    isDone: false,
  },
  {
    step: 3,
    isDone: false,
  },
];

const USER_REQUEST_FORM_INITAIL_STATE: RequestUserValuesI = {
  postWhere: "",
  postTags: [],
  postDetail: [],
  postPublic: false,
};

const page = () => {
  const [userRequsetForm, setUserRequsetForm] = useState<RequestUserValuesI>(
    USER_REQUEST_FORM_INITAIL_STATE,
  );

  const [allStepStatus, setAllStepStatus] = useState(
    ALLSTEP_STATUS_INITIAL_STATE,
  );

  const [nowStepNumber, setNowStepNumber] = useState(1);

  const [postId, setPostId] = useState("");

  const handleNext = () => {
    changeNextStep();
  };

  const changeNextStep = () => {
    if (nowStepNumber !== 4) {
      setAllStepStatus((prev) =>
        prev.map((status) => {
          if (status.step === nowStepNumber) {
            return { ...status, isDone: true };
          } else {
            return status;
          }
        }),
      );

      setNowStepNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (nowStepNumber === 4) {
      const requestConfig = {
        method: "post",
        url: "/posts",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(userRequsetForm),
      };

      (async () => {
        try {
          const result = await axios.request(requestConfig);
          console.log(result);
          const data = await result.data;
          setPostId(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
    console.log(userRequsetForm);
  }, [nowStepNumber, userRequsetForm]);

  return (
    <main className={style.requestPage}>
      <section className={style.top}>
        <ProgressBar
          nowStep={nowStepNumber}
          processes={allStepStatus}
        ></ProgressBar>
      </section>

      {nowStepNumber === 1 && (
        <ChooseWhereToUseNicknameStep
          onNext={(where: WhereValues) => {
            handleNext();
            setUserRequsetForm((prev) => ({ ...prev, postWhere: where }));
          }}
        ></ChooseWhereToUseNicknameStep>
      )}

      {nowStepNumber === 2 && (
        <ChooseNicknameTagStep
          onNext={(tags: string[]) => {
            handleNext();
            setUserRequsetForm((prev) => ({ ...prev, postTags: tags }));
          }}
        ></ChooseNicknameTagStep>
      )}

      {nowStepNumber >= 3 && (
        <RequirementDetailStep
          onNext={async ({
            postDetail,
            postPublic,
          }: {
            postDetail: string[];
            postPublic: boolean;
          }) => {
            handleNext();
            setUserRequsetForm((prev) => ({ ...prev, postDetail, postPublic }));
          }}
        ></RequirementDetailStep>
      )}

      {nowStepNumber === 4 && <Bottomsheet postId={postId}></Bottomsheet>}

      {/* Step  4 에서 데이터 전송 , 다음 페이지 혹은 성공 UI  */}
    </main>
  );
};

export default page;
