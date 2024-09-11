import dynamic from "next/dynamic";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import PageView from "@/components/shared/pageView";
const Content = dynamic(() => import("./components/Content"));

const {
  data: { attributes },
} = await fetchStrapi("/bulletin-board", { populate: "deep" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function BulletinBoard() {
  const heroImg = attributes.HeroImage.data.attributes;

  return (
    <div>
      <Hero
        img={heroImg.url}
        alt={heroImg.alternativeText}
        myHeight="h-[15rem] llg:h-[50rem]"
      >
        <ImageMask />
        <p className="text-6xl llg:text-9xl z-30">
          Bulletin <br className="llg:hidden" /> Board
        </p>
      </Hero>
      <PageView>
        <Content content={attributes.BullitenBoardContent} />
      </PageView>
    </div>
  );
}
