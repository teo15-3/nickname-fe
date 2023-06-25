"use client";

import "../styles/globals.scss";
import "../styles/reset.scss";

import Script from "next/script";
import { kakaoInit } from "../service/kakao";

// export const metadata = {
//   title: "유니크하면서 모던하고 대중적이지만 시크하고 유러스한 닉네임 지어줘",
//   description:
//     "유니크하면서 모던하고 대중적이지만 시크하고 유러스한 닉네임 지어줘",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={() => kakaoInit()}
      />
      <head>
        <title>
          유니크하면서 모던하고 대중적이지만 시크하고 유러스한 닉네임 지어줘
        </title>
        <meta
          property="og:title"
          content="유니크하면서 모던하고 대중적이지만 시크하고 유러스한 닉네임 지어줘"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://velog.velcdn.com/images/y00eunji/post/2a869576-b8f3-4471-b176-ca8364a5fb6a/image.png"
        />
        <meta
          property="og:description"
          content="유니크하면서 모던하고 대중적이지만 시크하고 유러스한 닉네임 지어줘"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
