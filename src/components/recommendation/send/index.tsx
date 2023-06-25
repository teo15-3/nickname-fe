"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.scss";
import { saveNickName } from "../../../lib/api/recommendation";

interface SendProps {
  id: string;
}

export default function Send({ id }: SendProps) {
  const router = useRouter();

  const [nickname, setNiname] = useState("");
  const [isInputFilled, setIsInputFilled] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNiname(event.target.value);
    if (event.target.value.trim() === "") {
      setIsInputFilled(false);
    } else {
      setIsInputFilled(true);
    }
  };

  const handleInputClear = () => {
    setNiname("");
    setIsInputFilled(false);
  };

  const handleButton = async () => {
    try {
      setIsInputFilled(false);
      const res = await saveNickName({ id, nickname });
      router.push("/completion");
    } catch (e) {
      alert("전송 할 수 없습니다.");
    }
  };

  return (
    <section className={styles.sendSection}>
      <div className={styles.inputWrap}>
        <input
          type="text"
          className={styles.input}
          placeholder="닉네임을 지어주세요."
          value={nickname}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className={`${
            isInputFilled ? styles.inputClearBtnActive : styles.inputClearBtn
          }`}
          onClick={handleInputClear}
        >
          x
        </button>
      </div>

      <button
        className={styles.sendButton}
        type="button"
        onClick={handleButton}
        disabled={!isInputFilled}
      >
        전송
      </button>
    </section>
  );
}
