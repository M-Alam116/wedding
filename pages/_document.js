import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head />
      <link rel="icon" href="favicon.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
