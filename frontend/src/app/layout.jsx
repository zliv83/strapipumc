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

const route = "/global";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" }, 3600);
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
  };
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
    </html>
  );
}
