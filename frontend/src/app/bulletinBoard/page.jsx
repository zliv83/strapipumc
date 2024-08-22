import { fetchStrapi, host } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import Image from "next/image";
import PageView from "@/components/shared/pageView";

const {
  data: { attributes },
} = await fetchStrapi("/bulletin-board", { populate: "deep" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
};

export default async function BulletinBoard() {
  const heroImg = attributes.HeroImage.data.attributes;

  const contentMap = attributes?.BulletinBoardContent?.map((item) => {
    const img = item.Image.data.attributes;
    return (
      <div className="flex flex-col gap-6">
        <h3 className="text-primary text-6xl text-center">{item.Title}</h3>
        <Image
          className="self-center"
          src={`${host}${img.url}`}
          alt={img.alternativeText}
          width={img.width}
          height={img.height}
          aria-label={img.alternativeText}
        />
      </div>
    );
  });

  return (
    <div>
      <Hero img={heroImg.url} alt={heroImg.alternativeText} size="board">
        <ImageMask />
        <p className="text-6xl llg:text-9xl z-30">
          Bulletin <br className="llg:hidden" /> Board
        </p>
      </Hero>
      <PageView>
        {attributes.BulletinBoardContent ? (
          contentMap
        ) : (
          <h3 className="text-primary text-6xl text-center">
            Check back later for the most recent updates
          </h3>
        )}
      </PageView>
    </div>
  );
}
