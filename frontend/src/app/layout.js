import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/General/Main";
 

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: '...',
  description: '...',
  keywords: "keyword1, kkeuy2"
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
