import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/home/hero";
const Programs = dynamic(() => import('@/components/home/programs'));
const AboutUs = dynamic(() => import('@/components/home/aboutUs'));
const TestimonialSection = dynamic(() => import('@/components/home/testimonials'));
const Testimonials = dynamic(() => import('@/components/shared/testimonials'));
import dynamic from 'next/dynamic';

const route = "/home";

const {
  data: { attributes },
} = await fetchStrapi(route, { populate: "deep" });


export const metadata ={
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
}

export default function Home() {
  const heroImg = attributes.HomeHero.picture.data.attributes;
  const testimonialImg = attributes.TestimonialImage.data.attributes;
  const aboutUsPicture = attributes.aboutus.AboutUsPicture.data.attributes;

  return (
    <div>
      <Hero
        img={heroImg.url}
        title={attributes.HomeHero.title}
        subTitle={attributes.HomeHero.SubTitle}
        alt={heroImg.alternativeText}
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
    </div>
  );
}
