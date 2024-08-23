import { fetchStrapi } from "lib/fetchStrapi";

import Hero from "@/components/home/hero";
import Programs from "@/components/home/programs";
import AboutUs from "@/components/home/aboutUs";
import TestimonialSection from "@/components/home/testimonials";
import Testimonials from "@/components/shared/testimonials";

const {
  data: { attributes },
} = await fetchStrapi("/home", { populate: "deep" });

console.log(attributes);

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
};

export default async function Home() {
  const heroImg = attributes.HomeHero.picture.data.attributes;
  const testimonialImg = attributes.TestimonialImage.data.attributes;

  //https://helpful-positivity-9e5f57aa9a.media.strapiapp.com/Home_Hero_84a869e49e.jpg

  return (
    <>
      <Hero
        img={heroImg.url}
        title={attributes.HomeHero.title}
        subTitle={attributes.HomeHero.SubTitle}
        alt={heroImg.alternativeText}
        height={heroImg.height}
        width={heroImg.width}
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
