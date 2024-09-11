import dynamic from "next/dynamic";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/home/hero";
const Programs = dynamic(() => import("@/components/home/programs"));
const AboutUs = dynamic(() => import("@/components/home/aboutUs"));
const TestimonialSection = dynamic(() =>
  import("@/components/home/testimonials")
);
const Testimonials = dynamic(() => import("@/components/shared/testimonials"));

const {
  data: { attributes },
} = await fetchStrapi("/home", { populate: "deep" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function Home() {
  return (
    <div>
      <Hero
        title={attributes.HomeHero.title}
        subTitle={attributes.HomeHero.SubTitle}
      />
      <Programs programsData={attributes.programs} />
      <AboutUs aboutus={attributes.aboutus.content} />
      <TestimonialSection>
        <Testimonials top testimonials={attributes.testimonials} />
      </TestimonialSection>
    </div>
  );
}
