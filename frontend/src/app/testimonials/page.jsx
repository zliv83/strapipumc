import TestimonialGrid from "@/components/testimonials/testimonialGrid";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import PageCard from "@/components/shared/pageCard";

import { fetchStrapi } from "lib/fetchStrapi";

export default async function Testimoinals() {
  const fetchedData = await fetchStrapi("/testimonials-page", {
    populate: "*",
  });

  const data = fetchedData.data.attributes;
  const strapiData = {
    Title: data.Title,
    HeroImage: data.HeroImage.data.attributes.url,
  };
  return (
    <>
      <Hero
        img={strapiData.HeroImage}
        alt="Childrens hands that spell out Testimonials"
        objectPosition="center bottom"
      />
      <div className="bg-PumcGreen p-4 llg:p-12">
        <PageCard>
          <HeroH1 className="text-primary pb-6 llg:pb-12">
            {strapiData.Title}
          </HeroH1>
          <TestimonialGrid />
        </PageCard>
      </div>
    </>
  );
}
