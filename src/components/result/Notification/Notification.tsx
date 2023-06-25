"use client";

import { useEffect, useState } from "react";
import style from "./Notification.module.scss";

type Props = {
  text: string;
};

const Notification = ({ text }: Props) => {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    setisOpen(true);

    return () => setisOpen(false);
  }, []);

  return (
    <section className={style.notification}>
      <div className={`${style.textWrapper} ${isOpen ? style.show : ""} }`}>
        {text}
      </div>
    </section>
  );
};

export default Notification;
