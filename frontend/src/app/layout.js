import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/General/Main";
import Head from "next/head";
import ScrollToTopButton from "@/components/UI/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
 
      <body className={inter.className}>

        
        <Main>{children}</Main>
        {/* <ScrollToTopButton /> */}
      </body>
    </html>
  );
}
