import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import FAQAccordion from "./components/FAQAccordion";
import PageView from "@/components/shared/pageView";

const {
  data: { attributes },
} = await fetchStrapi("/faq", { populate: "deep, 6" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function FAQ() {
  const image = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img="/FAQ.webp"
        alt="Blocks spelling out the word FAQ"
        myHeight="h-[15rem] llg:h-[35rem]"
      />
      <PageView>
        <FAQAccordion faqs={attributes.faqQuestions} />
      </PageView>
    </>
  );
}
