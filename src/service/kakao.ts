export const kakaoInit = () => {
  // 페이지가 로드되면 실행
  window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  window.Kakao.isInitialized();
};

export const onKaKaoShare = async (param: string) => {
  const recommendationPage = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/recommendation/${param}`;

  await window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "유니크하고 모던하고 멋있는 닉네임 만들어줘!",
      imageUrl:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2wnCs%2Fbtslb6689AW%2FLH80Aid2KFDvIkNXgKbuok%2Fimg.png",
      link: {
        mobileWebUrl: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
        webUrl: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
      },
    },

    buttons: [
      {
        title: "추천해주러 가기",
        link: {
          mobileWebUrl: recommendationPage,
          webUrl: recommendationPage,
        },
      },
    ],
  });
};
