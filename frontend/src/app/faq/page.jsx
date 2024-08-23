import { fetchStrapi } from "lib/fetchStrapi";
import MetaData from "@/components/shared/metaData";
import Hero from "@/components/shared/hero";
import FAQAccordion from "./components/FAQAccordion";
import PageView from "@/components/shared/pageView";

export default async function FAQ() {
  const {
    data: { attributes },
  } = await fetchStrapi("/faq", { populate: "deep, 6" });
  const image = attributes.HeroImage.data.attributes;

  return (
    <>
      <MetaData
        title={attributes.meta.metaTitle}
        description={attributes.meta.metaDescription}
      />
      <Hero img={image.url} size="about" alt={image.alternativeText} />
      <PageView>
        <FAQAccordion faqs={attributes.faqQuestions} />
      </PageView>
    </>
  );
}
