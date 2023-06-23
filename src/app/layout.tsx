import "../styles/globals.scss";
import "../styles/reset.scss";

export const metadata = {
  title: "유니크하면서 모던하고 대중적이지만 시크하고 유러스한 닉네임 지어줘",
  description:
    "유니크하면서 모던하고 대중적이지만 시크하고 유러스한 닉네임 지어줘",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
