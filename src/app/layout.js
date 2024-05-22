import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@component/Navbar/index";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WISE-ASS",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
