import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import AtribsLoader from "@/components/AtribsLoader";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-jakarta",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "ATRIBS",
  description: "Connect. Collaborate. Celebrate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="bg-black text-white antialiased">
        {/* Global Atribs opening animation */}
        <AtribsLoader />

        {/* Main website */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
