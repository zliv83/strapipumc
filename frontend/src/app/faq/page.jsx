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
};

export default async function FAQ() {
  const image = attributes.HeroImage.data.attributes;

  return (
    <div>
      <Hero img={image.url} size="about" alt={image.alternativeText} />
      <PageView>
        <FAQAccordion faqs={attributes.faqQuestions} />
      </PageView>
    </div>
  );
}
