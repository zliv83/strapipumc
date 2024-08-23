import { Alegreya } from "next/font/google";

import { NextUIProvider } from "@nextui-org/system";
import { DividerProvider } from "lib/dividerContext";

import "styles/globals.css";
import { fetchStrapi } from "lib/fetchStrapi";
import MetaData from "@/components/shared/metaData";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const alegreya = Alegreya({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children }) {
  const {
    data: { attributes },
  } = await fetchStrapi("/global", { populate: "deep" });
  return (
    <html lang="en">
      <MetaData
        title={attributes.metadata.metaTitle}
        description={attributes.metadata.metaDescription}
      />
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
