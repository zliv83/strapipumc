import { fetchStrapi } from "lib/fetchStrapi";

import Testimonials from "@/components/shared/testimonials";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";

const {
  data: { attributes },
} = await fetchStrapi("/testimonials-page", { populate: "deep, 5" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
}

export default function Testimoinals() {
  const image = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img={image.url}
        alt={image.alternativeText}
        height={image.height}
        width={image.width}
        myHeight="h-[10rem] llg:h-[30rem]"
        className="llg:object-[0%_100%]"
      />
      <PageView className="bg-PumcGreen">
        <section>
          <HeroH1 className="text-primary">{attributes.Title}</HeroH1>
          <Testimonials />
        </section>
      </PageView>
    </>
  );
}
