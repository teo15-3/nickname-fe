export const REQUESTPAGE_COMMON_IMAGE_PATH = "/assets/img/request/";

enum RequestCategoryNames {
  COMPANY = "직장에서",
  SNS = "SNS에서",
  GAME = "게임에서",
  EVERYWHERE = "어디서든",
}

const EACH_CATEGORY_EXAMPLE: {
  [key in keyof typeof RequestCategoryNames]: string;
} = {
  COMPANY: "앨런",
  SNS: "nizu_01",
  GAME: "S2지존S2",
  EVERYWHERE: "",
};

export const REQUSET_PAGE_CONSTANTS = Object.freeze({
  EACH_CATEGORY_INFO: Object.freeze(
    Object.entries(RequestCategoryNames).map(([key, categoryName]) => ({
      category: key.toLowerCase(),
      categoryName,
      path: `${REQUESTPAGE_COMMON_IMAGE_PATH}illust-${key.toLocaleLowerCase()}.svg`,
      example: EACH_CATEGORY_EXAMPLE[key as keyof typeof RequestCategoryNames],
    })),
  ),
  NICKNAME_TAGS: Object.freeze([
    "귀여운",
    "재치있는",
    "밝은",
    "개성있는",
    "감상적인",
    "부드러운",
    "우아한",
    "부르기쉬운",
    "아이돌같은",
    "시크릿한",
    "쎄 보이는",
    "찌질한",
    "간단한",
  ]),
  MAXIMUM_TAG_LIMIT: 5,
  MAXIMUM_REQUIREMENT_LIMIT: 3,
});
