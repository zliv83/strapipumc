import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/home/hero";
import NoData from "@/components/shared/NoData";
import Programs from "@/components/home/programs";
import AboutUs from "@/components/home/aboutUs";
import TestimonialSection from "@/components/home/testimonials";
import Testimonials from "@/components/shared/testimonials";

export const dynamic = "force-dynamic";

const {
  data: {
    attributes: { meta },
  },
} = await fetchStrapi("/home", { populate: "deep" });

export const metadata = {
  title: meta?.metaTitle,
  description: meta?.metaDescription,
  robots: { index: true },
};

export default async function Home() {
  const {
    data: {
      attributes: { programs, aboutus, testimonials, ModalOnOff, ModalImage },
      error,
    },
  } = await fetchStrapi("/home", { populate: "deep" });

  console.log("ModalOnOff", ModalOnOff);

  if (error) {
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
