import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/General/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Security Services in Coimbatore",
  description:
    "Trusted Security Services in Coimbatore offering high-quality security solutions for a safe and secure environment. Contact us today!",
  keywords:
    "Security Services in Coimbatore, Security Solutions, Detective Services,Manpower Consultancy,Housekeeping Services",
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
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />

        <meta name="msvalidate.01" content="60C25435936D208FD7AD97985F3D6F3E" />

        <meta name="yandex-verification" content="723e015616885af1" />
      </head>
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
