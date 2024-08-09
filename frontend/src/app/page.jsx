import { fetchStrapi } from "lib/fetchStrapi";

import Hero from "@/components/home/hero";
import Programs from "@/components/home/programs";
import AboutUs from "@/components/home/aboutUs";
import Testimonials from "@/components/home/testimonials";
import TestimonialGrid from "@/components/testimonials/testimonialGrid";

export default async function Home() {
  const path = "/home";
  const urlParamsObject = {
    populate: {
      HomeHero: { populate: "*" },
      aboutus: { populate: "*" },
    },
  };
  const fetchedData = await fetchStrapi(path, urlParamsObject);
  const data = fetchedData.data.attributes;
  const strapiData = {
    heroImg: data.HomeHero.picture.data.attributes.url,
    title: data.HomeHero.title,
    description: data.HomeHero.description,
    content: data.aboutus.content,
  };

  return (
    <>
      <Hero
        img={strapiData.heroImg}
        title={strapiData.title}
        description={strapiData.description}
      />
      <Programs />
      <AboutUs aboutus={strapiData.content} />
      <Testimonials>
        <TestimonialGrid top />
      </Testimonials>
    </>
  );
}
