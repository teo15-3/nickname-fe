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
        "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
      link: {
        mobileWebUrl: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
        webUrl: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
      },
    },
    itemContent: {
      profileText: "Kakao",
      profileImageUrl:
        "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      titleImageUrl:
        "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      titleImageText: "Cheese cake",
      titleImageCategory: "Cake",
      items: [
        {
          item: "첫번째",
          itemOp: "모던한",
        },
        {
          item: "두번째",
          itemOp: "유니크한",
        },
      ],
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
