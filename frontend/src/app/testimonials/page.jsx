import { fetchStrapi } from "lib/fetchStrapi";
import Testimonials from "@/components/shared/testimonials";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";

export const dynamic = "force-dynamic";

const {
  data: {
    attributes: { meta },
  },
} = await fetchStrapi("/testimonials-page", { populate: "deep, 5" });

export const metadata = {
  title: meta?.metaTitle,
  description: meta?.metaDescription,
  robots: { index: true },
};

export default async function Testimoinals() {
  const {
    data: {
      attributes: { testimonials },
      error,
    },
  } = await fetchStrapi("/testimonials-page", { populate: "deep, 5" });
  if (error) {
    return <NoData />;
  }
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
          <HeroH1 className="text-primary">See what others have to say!</HeroH1>
          <Testimonials testimonials={testimonials} />
        </section>
      </PageView>
    </>
  );
}
