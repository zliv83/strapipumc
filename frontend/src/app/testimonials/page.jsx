import { fetchStrapi } from "lib/fetchStrapi";

import Testimonials from "@/components/shared/testimonials";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";

const route = "/testimonials-page";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
  };
}

export default async function Testimoinals() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, {
    populate: "deep",
  });

  const image = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img="https://helpful-positivity-9e5f57aa9a.media.strapiapp.com/testimonials_47bbe68f60.webp"
        alt={image.alternativeText}
        height="h-[10rem] llg:h-[30rem]"
        className="llg:object-[0%_100%]"
      />
      <PageView>
        <section>
          <HeroH1 className="text-primary pb-6">{attributes.Title}</HeroH1>
          <Testimonials />
        </section>
      </PageView>
    </>
  );
}
