// eslint-disable-next-line import/prefer-default-export
export const kakaoInit = () => {
  // 페이지가 로드되면 실행
  window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  window.Kakao.isInitialized();
};
