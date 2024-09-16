import pageData from "lib/pageData";
import Testimonials from "@/components/shared/testimonials";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";

const { testimonials, metadata, hasError } = await pageData(
  "/testimonials-page",
  "deep, 5"
);

export { metadata };

export default function Testimoinals() {
  if (hasError) {
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
