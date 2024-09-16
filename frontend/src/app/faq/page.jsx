import pageData from "lib/pageData";
import Hero from "@/components/shared/hero";
import FAQAccordion from "./components/FAQAccordion";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";

const { faqQuestions, metadata, hasError } = await pageData("/faq", "deep, 6");

export { metadata };

export default function FAQ() {
  if (hasError) {
    return <NoData />;
  }
  return (
    <>
      <Hero
        img="/FAQ.webp"
        alt="Blocks spelling out the word FAQ"
        myHeight="h-[15rem] llg:h-[35rem]"
      />
      <PageView>
        {faqQuestions ? <FAQAccordion faqs={faqQuestions} /> : null}
      </PageView>
    </>
  );
}
