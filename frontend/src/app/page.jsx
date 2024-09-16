import dynamic from "next/dynamic";
import pageData from "lib/pageData";
import Hero from "@/components/home/hero";
import NoData from "@/components/shared/NoData";
const Programs = dynamic(() => import("@/components/home/programs"));
const AboutUs = dynamic(() => import("@/components/home/aboutUs"));
const TestimonialSection = dynamic(() =>
  import("@/components/home/testimonials")
);
const Testimonials = dynamic(() => import("@/components/shared/testimonials"));

const { programs, aboutus, testimonials, metadata, hasError } = await pageData(
  "/home"
);

export { metadata };

export default function Home() {
  if (hasError) {
    return <NoData />;
  }
  return (
    <div>
      <Hero />
      <Programs programsData={programs} />
      <AboutUs aboutus={aboutus.content} />
      <TestimonialSection>
        <Testimonials top testimonials={testimonials} />
      </TestimonialSection>
    </div>
  );
}
