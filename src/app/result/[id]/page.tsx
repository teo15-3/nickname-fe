"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { onKaKaoShare } from "../../../service/kakao";
import { copy } from "../../../utils/clipboard";
import Notification from "../../../components/result/Notification/Notification";
import style from "./page.module.scss";
import Tags from "../../../components/result/Tags/Tags";
import Lists from "../../../components/result/Lists/Lists";

import { RESLUT_PAGE_CONSTANTS } from "../../../utils/resultPageConstant";

type Props = {
  params: {
    id: string;
  };
};

type NicknameResultT = {
  category: string;
  title: string;
  nicknames: string[];
  tags: string[];
};

const DEFAULT_DATA_RESULT_STATE: NicknameResultT = {
  category: "",
  title: "",
  tags: [],
  nicknames: [],
};

// 아더키를 useState에 넣을필요가..?근데 당장 생각안나서 일단진행

export default function Create({ params }: Props) {
  const [show, setShow] = useState(false);

  const [data, setData] = useState(DEFAULT_DATA_RESULT_STATE);
  const [otherKey, setOtherKey] = useState("");

  const handleDeleteBtn = async (mykey: string, nickname: string) => {
    const res = await fetch(
      `https://api.fire-lighter.kr/nickname/${mykey}/nickname-received?nickname=${nickname}`,
      {
        method: "DELETE",
      },
    );

    if (res.ok) {
      setData((prev) => ({
        ...prev,
        nicknames: prev.nicknames.filter((nick) => nick !== nickname),
      }));
    }
  };

  useEffect(() => {
    const fetchResultData = async () => {
      const res = await fetch(
        `https://api.fire-lighter.kr/nickname/${params.id}/nickname-received`,
      )
        .then((res) => res.json())
        .then(setData);
    };

    const fetchOtherKey = async () => {
      const res = await fetch(
        `https://api.fire-lighter.kr/key?mykey=${params.id}`,
      )
        .then((res) => res.json())
        .then((res) => setOtherKey(res.otherkey));
    };

    fetchResultData();
    fetchOtherKey();
  }, []);

  console.log(data);

  const { category, title, nicknames, tags } = data;

  const showCopyResultUiHandle = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const handleClipBoardSelfBtn = () => {
    const curPath = window.location.pathname;
    const url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}${curPath}`;
    copy(url).then(showCopyResultUiHandle);
  };

  const handleClipBoardShareDirectBtn = () => {
    const recommendataionUrl = `${process.env.NEXT_PUBLIC_DOMAIN_URL}recommendation/${otherKey}`;
    copy(recommendataionUrl).then(showCopyResultUiHandle);
  };

  return (
    <div className={style.layoutContainer}>
      <div className={style.wrapper}>
        <section className={style.titles}>
          <h3 className={style.title}>{`${category} 사용할`}</h3>
          <h3 className={style.title}>{`${title}`}</h3>
          <h3 className={style.title}>닉네임목록</h3>
        </section>

        <section className={style.tagSection}>
          <div>
            <Tags tags={tags} />
          </div>
        </section>

        <section className={style.listUpContainer}>
          {nicknames.length !== 0 ? (
            <Lists
              handleDelete={handleDeleteBtn}
              mykey={params.id}
              lists={nicknames}
            />
          ) : (
            <p />
          )}
        </section>

        <section className={style.soloBtn}>
          <button
            type="button"
            onClick={handleClipBoardSelfBtn}
            className={`${style.copyBtn}`}
          >
            <Image
              alt="shareResultSelf"
              src={`${RESLUT_PAGE_CONSTANTS.DFAULT_IMG_PATH}bt_priamry_link copy.svg`}
              width={224}
              height={56}
            />
          </button>
        </section>

        <section className={style.share}>
          <h4 className={style.shareTitle}>닉네임 짓기 요청하기</h4>
          <div className={style.buttons}>
            <button
              onClick={() => onKaKaoShare(otherKey)}
              className={style.shareBtn}
              type="button"
            >
              <Image
                alt="kakaoShare"
                src={`${RESLUT_PAGE_CONSTANTS.DFAULT_IMG_PATH}bt_kakao share.svg`}
                width={166}
                height={50}
              />
            </button>
            <button
              onClick={handleClipBoardShareDirectBtn}
              className={style.shareBtn}
              type="button"
            >
              <Image
                alt="shareReulstLink"
                src={`${RESLUT_PAGE_CONSTANTS.DFAULT_IMG_PATH}bt_link_share.svg`}
                width={166}
                height={50}
              />
            </button>
          </div>
        </section>
        {show && <Notification />}
      </div>
    </div>
  );
}
