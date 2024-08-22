import { Alegreya } from "next/font/google";

import { NextUIProvider } from "@nextui-org/system";
import { DividerProvider } from "lib/dividerContext";
import { fetchStrapi } from "lib/fetchStrapi";
import "styles/globals.css";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const alegreya = Alegreya({
  subsets: ["latin"],
  display: "swap",
});

const {
  data: { attributes },
} = await fetchStrapi("/global", { populate: "deep" });

export const metaData = {
  title: attributes.metadata.metaTitle,
  description: attributes.metadata.metaDescription,
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
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
