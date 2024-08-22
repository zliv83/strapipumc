import { fetchStrapi } from "lib/fetchStrapi";

import Testimonials from "@/components/shared/testimonials";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";

export default async function Testimoinals() {
  const {
    data: { attributes },
  } = await fetchStrapi("/testimonials-page", {
    populate: "deep",
  });

  const strapiData = {
    title: attributes.Title,
    img: attributes.HeroImage.data.attributes.url,
    alt: attributes.HeroImage.data.attributes.atl,
  };

  const Content = () => {
    return (
      <section>
        <HeroH1 className="text-primary pb-6">{strapiData.title}</HeroH1>
        <Testimonials />
      </section>
    );
  };
  return (
    <>
      <Hero
        img={strapiData.img}
        alt="Childrens hands that spell out Testimonials"
        size="about"
      />
      <PageView>
        <section>
          <HeroH1 className="text-primary pb-6">{strapiData.title}</HeroH1>
          <Testimonials />
        </section>
      </PageView>
    </>
  );
}
