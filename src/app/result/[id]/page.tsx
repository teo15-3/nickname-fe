"use client";

import { useState } from "react";
import { onKaKaoShare } from "../../../service/kakao";
import { copy } from "../../../utils/clipboard";
import Notification from "../../../components/result/Notification/Notification";

type Props = {
  params: {
    id: string;
  };
};

type CopyStatus = "self" | "share";

const DEFAULT_COPY_MESSAGE = "클립보드에 복사되었습니다";

export default function Create({ params }: Props) {
  const [show, setShow] = useState(false);
  const [copyMessage, setCopyMessage] = useState(DEFAULT_COPY_MESSAGE);

  const showCopyResultUiHandle = (coptStatus: CopyStatus) => {
    setShow(true);

    if (coptStatus === "self") {
      setCopyMessage(`${"현재 페이지가"} ${DEFAULT_COPY_MESSAGE}`);
    } else if (coptStatus === "share") {
      setCopyMessage(`${"공유 페이지가"} ${DEFAULT_COPY_MESSAGE}`);
    }

    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const handleClipBoardSelfBtn = () => {
    const curPath = window.location.pathname;
    const url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}${curPath}`;
    copy(url).then(() => showCopyResultUiHandle("self"));
  };

  const handleClipBoardShareDirectBtn = () => {
    const recommendataionUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/recommendation/${params.id}`;
    copy(recommendataionUrl).then(() => showCopyResultUiHandle("share"));
  };

  return (
    <main>
      <p>결과 보는 페이지~</p>
      <button type="button" onClick={() => onKaKaoShare(params.id)}>
        공유 버튼
      </button>
      <button type="button" onClick={handleClipBoardSelfBtn}>
        결과 페이지 저장하기
      </button>

      <button onClick={handleClipBoardShareDirectBtn} type="button">
        공유 URL 복사하기
      </button>
      {show && <Notification text={copyMessage} />}
    </main>
  );
}
