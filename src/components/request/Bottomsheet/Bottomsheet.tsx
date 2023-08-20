"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./Bottomsheet.module.scss";

import { REQUESTPAGE_COMMON_IMAGE_PATH } from "@/utils/requestPageConstants";
import Btn from "../Btn/Btn";
import { useRouter } from "next/navigation";

const Bottomsheet = ({ postId }: { postId: string }) => {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    setisOpen(false);
    const showTimer = setTimeout(() => {
      setisOpen(true);
    }, 100);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <section className={style.wrapper}>
      <div
        className={
          isOpen ? `${style.bottomSheet} ${style.show}` : style.bottomSheet
        }
      >
        <div className={style.completeIcon}>
          <Image
            alt="icon"
            width={60}
            height={60}
            src={`${REQUESTPAGE_COMMON_IMAGE_PATH}ic-complete.png`}
          ></Image>
        </div>
        <div className={style.textSection}>
          <h1 className={style.title}>닉네임 요청 완료!</h1>
          <h4 className={style.describe}>
            추천받은 닉네임을 확인할 수 있는 <br></br> 결과 페이지로 이동할게요.
          </h4>
        </div>
        <Btn
          onNext={() => router.push(`/result/${postId}`)}
          disabled={false}
          text="확인"
        ></Btn>
      </div>
    </section>
  );
};

export default Bottomsheet;
