"use client";

import { useState } from "react";

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

  return (
    <main>
      <p>결과 보는 페이지~</p>
    </main>
  );
}
