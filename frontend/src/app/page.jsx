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
  const aboutUsPicture = attributes.aboutus.AboutUsPicture.data.attributes;

  return (
    <>
      <Hero
        img="https://helpful-positivity-9e5f57aa9a.media.strapiapp.com/home_Hero_fe8bb30418.webp"
        title={attributes.HomeHero.title}
        subTitle={attributes.HomeHero.SubTitle}
        alt={heroImg.alternativeText}
        height={heroImg.height}
        width={heroImg.width}
      />
      <Programs img={attributes.BeeBackground.data.attributes.url} />
      <AboutUs
        aboutus={attributes.aboutus.content}
        img={aboutUsPicture.url}
        alt={aboutUsPicture.alternativeText}
        height={aboutUsPicture.height}
        width={aboutUsPicture.width}
      />
      <TestimonialSection
        img={testimonialImg.url}
        alt={testimonialImg.alternativeText}
      >
        <Testimonials top />
      </TestimonialSection>
    </>
  );
}
