import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import { Image } from "@nextui-org/image";
import PageView from "@/components/shared/pageView";
import Link from "next/link";

const {
  data: { attributes },
} = await fetchStrapi("/bulletin-board", { populate: "deep" });


export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
}

export default function BulletinBoard() {
  const heroImg = attributes.HeroImage.data.attributes;

  const contentMap = attributes.BullitenBoardContent.map((item, i) => {
    return (
      <div key={i} className="flex flex-col gap-6">
        <h2 className="text-primary text-4xl pb-6">{item.Title}</h2>
        <div className="grid grid-cols-1 llg:grid-cols-2 gap-6 pb-6">
          {item.Pictures.data.map((img, j) => {
            return (
              <Link key={j} href={img.attributes.url} target="_blank">
                <Image
                  src={img.attributes.url}
                  alt={img.attributes.alternativeText || "User uploaded photo"}
                  aria-label={
                    img.attributes.alternativeText ||
                    "This photo was uploaded by a user"
                  }
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  });

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
        {attributes.BullitenBoardContent ? (
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
