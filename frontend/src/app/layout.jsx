import { Alegreya } from "next/font/google";

import { NextUIProvider } from "@nextui-org/system";
import { DividerProvider } from "lib/dividerContext";

import "styles/globals.css";
import { fetchStrapi } from "lib/fetchStrapi";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const alegreya = Alegreya({
  subsets: ["latin"],
  display: "swap",
});

const route = "/global";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
  };
}

export default async function RootLayout({ children }) {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
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
