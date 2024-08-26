import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/home/hero";
import Programs from "@/components/home/programs";
import AboutUs from "@/components/home/aboutUs";
import TestimonialSection from "@/components/home/testimonials";
import Testimonials from "@/components/shared/testimonials";

const route = "/home";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
  };
}

export default async function Home() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  const heroImg = attributes.HomeHero.picture.data.attributes;
  const testimonialImg = attributes.TestimonialImage.data.attributes;

  return (
    <>
      <Hero
        img={heroImg.url}
        title={attributes.HomeHero.title}
        subTitle={attributes.HomeHero.SubTitle}
        alt={heroImg.alternativeText}
      />
      <Programs />
      <AboutUs aboutus={attributes.aboutus.content} />
      <TestimonialSection
        img={testimonialImg.url}
        alt={testimonialImg.alternativeText}
      >
        <Testimonials top />
      </TestimonialSection>
    </>
  );
}
