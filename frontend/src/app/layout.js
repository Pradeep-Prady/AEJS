import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/General/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Security Services in Coimbatore",
  description: "",
  keywords: "keyword1, kkeuy2",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
        
          name="google-site-verification"
          content="4RhE729BjHbJDDlVgErYHpS0k3Y4Y4d6XUn3jn9ym3c"
        />
      </head>
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
