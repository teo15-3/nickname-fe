"use client";

import style from "./ChooseWhereToUseNicknameStep.module.scss";
import Btn from "../Btn/Btn";
import RequestRadioGroup from "./RequsetRadioGroup/RequestRadioGroup";
import { ChangeEvent, useState } from "react";
import { WhereValues } from "@/app/request/page";

const ChooseWhereToUseNicknameStep = ({
  onNext,
}: {
  onNext: (where: WhereValues) => void;
}) => {
  const [selected, setSelected] = useState<WhereValues>("");

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelected(value as WhereValues);
  };
  return (
    <section className={style.wrapper}>
      <h1 className={style.title}>어디에서 쓸 닉네임 인가요?</h1>
      <section className={style.mainSection}>
        <div className={style.radioSection}>
          <RequestRadioGroup
            selected={selected}
            onChangeValue={handleRadioChange}
          ></RequestRadioGroup>
        </div>
        <Btn
          disabled={!selected}
          onNext={() => onNext(selected)}
          text={"다음"}
        ></Btn>
      </section>
    </section>
  );
};

export default ChooseWhereToUseNicknameStep;
