import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";
import Content from "./components/Content";

export const dynamic = "force-dynamic";

const {
  data: {
    attributes: { meta },
  },
} = await fetchStrapi("/bulletin-board", { populate: "deep" });

export const metadata = {
  title: meta?.metaTitle,
  description: meta?.metaDescription,
  robots: { index: true },
};

export default async function BulletinBoard() {
  const {
    data: {
      attributes: { BullitenBoardContent },
      error,
    },
  } = await fetchStrapi("/bulletin-board", { populate: "deep" });
  if (error) {
    return <NoData />;
  }
  return (
    <div>
      <Hero
        img="/Bulletin.webp"
        alt="Large tan cork bord on a orange wall"
        myHeight="h-[15rem]"
      >
        <ImageMask />
        <p className="text-6xl llg:text-9xl z-30">
          Bulletin <br className="llg:hidden" /> Board
        </p>
      </Hero>
      <PageView>
        <Content content={BullitenBoardContent} />
      </PageView>
    </div>
  );
}
