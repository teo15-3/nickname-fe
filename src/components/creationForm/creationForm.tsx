"use client";

import { useState, KeyboardEvent, ChangeEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./creationForm.module.scss";

export default function CreationForm() {
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 15);
    setTitle(value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleTagValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 15);
    setTagValue(value);
  };

  const handleTagBtn = () => {
    setTags((prevTags) => {
      if (prevTags.length < 5) {
        return [...prevTags, tagValue];
      }
      return prevTags;
    });
    setTagValue("");
  };

  const handleTagInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagValue !== "") {
      setTags((prevTags) => {
        if (prevTags.length < 5) {
          return [...prevTags, tagValue];
        }
        return prevTags;
      });
      setTagValue("");
    }
  };

  const handleTagRemove = (index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const isFormValid = category !== "" && tags.length > 0;

  const handleSubmit = async () => {
    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.fire-lighter.kr/nickname-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category, tags, title }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        const myKey = data.mykey;
        if (myKey) {
          // 성공적인 응답 처리 후 페이지 이동
          router.push(`/result/${myKey}`);
        }
      } else {
        // 요청 실패 처리
        alert("요청 실패");
      }
    } catch (error) {
      // 에러 처리
      alert("에러 발생");
    }

    setIsSubmitting(false);
  };

  const hasTitle = () => {
    return title.length > 0;
  };

  const hasTag = () => {
    return tags.length > 0;
  };

  const hasCategory = () => {
    return category !== "";
  };

  const isWritingTag = () => {
    return tagValue.length > 0;
  };

  return (
    <section className={styles.formWrapper}>
      <form>
        <div>
          <div className={styles.labelWrapper} style={{ marginBottom: "10px" }}>
            <Image
              src={
                hasTitle()
                  ? "/assets/img/creation/ic_check_completed.svg"
                  : "/assets/img/creation/ic_check_uncompleted.svg"
              }
              alt="완료여부 확인 아이콘"
              width={20}
              height={20}
              className={styles.imageInline}
            />
            <span className={styles.label}>닉네임 지어줘~!</span>
          </div>
          <div className={styles.center}>
            <input
              className={styles.categoryInput}
              type="text"
              placeholder="귀엽고 깜직한데 만만치 않은"
              value={title}
              onChange={handleTitleChange}
              style={{ fontFamily: "Pretendard" }}
            />
          </div>
        </div>
        <div>
          <div className={styles.labelWrapper} style={{ marginBottom: "11px" }}>
            <Image
              src={
                hasCategory()
                  ? "/assets/img/creation/ic_check_completed.svg"
                  : "/assets/img/creation/ic_check_uncompleted.svg"
              }
              alt="완료여부 확인 아이콘"
              width={20}
              height={20}
              className={styles.imageInline}
            />
            <span className={styles.label}>어디에서 쓰는 닉네임인가요?</span>
          </div>
          <div className={styles.center}>
            <select
              className={styles.select}
              value={category}
              onChange={handleCategoryChange}
              style={{
                fontFamily: "Pretendard",
                color: "#8B8B8B",
                fontSize: "14px",
              }}
            >
              <option value="" style={{ display: "none" }}>
                선택하세요
              </option>
              <option value="1">게임에서</option>
              <option value="2">별명으로</option>
              <option value="3">회사에서</option>
              <option value="4">무지성으로</option>
            </select>
          </div>
        </div>
        <div>
          <div className={styles.labelWrapper} style={{ marginBottom: "5px" }}>
            <Image
              src={
                hasTag()
                  ? "/assets/img/creation/ic_check_completed.svg"
                  : "/assets/img/creation/ic_check_uncompleted.svg"
              }
              alt="완료여부 확인 아이콘"
              width={20}
              height={20}
              className={styles.imageInline}
            />
            <span className={styles.label}>
              요구 사항을 태그로 작성해주세요
            </span>
          </div>
          <div className={styles.tagDesc}>
            <span>ex.</span> #짱 센 닉네임 #태그예시 # 뭐하지
          </div>
          <div className={styles.center} style={{ marginBottom: "5px" }}>
            <input
              className={styles.tagInput}
              type="text"
              onKeyDown={handleTagInputKeyDown}
              onChange={handleTagValueChange}
              style={{ fontFamily: "Pretendard" }}
              value={tagValue}
              placeholder={
                hasTag()
                  ? "태그는 5개까지 등록 가능해요."
                  : "원하는 요청사항을 직접 입력해보세요."
              }
            />
            <button
              type="button"
              className={
                isWritingTag() ? styles.tagButton : styles.disabledTagButton
              }
              onClick={handleTagBtn}
            >
              추가
            </button>
          </div>
          <div className={styles.tagContainer}>
            <div className={styles.tagWrapper}>
              {tags.map((tag, index) => (
                <span
                  key={tag + index.toString()}
                  className={styles.tag}
                  onClick={() => handleTagRemove(index)}
                >
                  {tag}
                  <Image
                    src="/assets/img/creation/ic_delete.svg"
                    alt="삭제버튼"
                    width={24}
                    height={24}
                    className={styles.imageInline}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </form>
      <div className={styles.center}>
        <button
          type="button"
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          입력 완료{" "}
          <Image
            src="/assets/img/creation/ic_heart.svg"
            alt="삭제버튼"
            width={24}
            height={24}
            className={styles.imageInline}
          />
        </button>
      </div>
    </section>
  );
}
