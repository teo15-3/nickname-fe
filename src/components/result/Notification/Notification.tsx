"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./Notification.module.scss";

import { RESLUT_PAGE_CONSTANTS } from "../../../utils/resultPageConstant";

const Notification = () => {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    setisOpen(true);
    const showTimer = setTimeout(() => {
      setisOpen(false);
    }, 1900);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <section className={style.notification}>
      <div
        className={`${style.textWrapper} ${isOpen ? style.show : style.hide} }`}
      >
        <Image
          width={338}
          height={42}
          alt="modal"
          src={`${RESLUT_PAGE_CONSTANTS.DFAULT_IMG_PATH}toast_copy complete.svg`}
        />
      </div>
    </section>
  );
};

export default Notification;
