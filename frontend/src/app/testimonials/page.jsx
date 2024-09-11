import { fetchStrapi } from "lib/fetchStrapi";

import Testimonials from "@/components/shared/testimonials";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";

const { data } = await fetchStrapi("/testimonials-page", {
  populate: "deep, 5",
});

export const metadata = {
  title: data.attributes.meta.metaTitle,
  description: data.attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function Testimoinals() {
  return (
    <>
      <Hero
        img="/testimonials.webp"
        alt="Children's hands spelling out the word Testimonials"
        myHeight="h-[10rem] llg:h-[30rem]"
        className="llg:object-[0%_100%]"
      />
      <PageView className="bg-PumcGreen">
        <section>
          <HeroH1 className="text-primary">{data.attributes.Title}</HeroH1>
          <Testimonials testimonials={data.attributes.testimonials} />
        </section>
      </PageView>
    </>
  );
}
