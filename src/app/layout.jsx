import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Umayer Ahmad | Portfolio",
  description: "Computer Engineering student and Front-End Developer passionate about building innovative and user-friendly websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>

        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
