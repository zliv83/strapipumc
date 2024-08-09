import "../../styles/globals.css";

import { Alegreya } from "next/font/google";

import { NextUIProvider } from "@nextui-org/system";
import { DividerProvider } from "lib/dividerContext";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const alegreya = Alegreya({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PUMC Preschool",
  description: "Powell United Methodist Church Preschool in Powell, Ohio",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={alegreya.className}>
        <DividerProvider>
          <NextUIProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </NextUIProvider>
        </DividerProvider>
      </body>
    </html>
  );
}
