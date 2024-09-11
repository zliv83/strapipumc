import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import { Alegreya } from "next/font/google";

import { NextUIProvider } from "@nextui-org/system";

import "styles/globals.css";
import { fetchStrapi } from "lib/fetchStrapi";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const alegreya = Alegreya({
  subsets: ["latin"],
  display: "swap",
});



export const metaData = {
  robots: {
    index: true
  }
}


export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alegreya.className}>
        <NextUIProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextUIProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG} />
    </html>
  );
}
