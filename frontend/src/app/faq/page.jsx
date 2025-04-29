import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import FAQAccordion from "./components/FAQAccordion";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";

export const dynamic = "force-dynamic";

const {
  data: {
    attributes: { meta },
  },
} = await fetchStrapi("/faq", { populate: "deep, 6" });

export const metadata = {
  title: meta?.metaTitle,
  description: meta?.metaDescription,
  robots: { index: true },
};

export default async function FAQ() {
  const {
    data: {
      attributes: { faqQuestions, Title },
      error,
    },
  } = await fetchStrapi("/faq", { populate: "deep, 6" });
  if (error) {
    return <NoData />;
  }
  return (
    <>
      <Hero
        img="/FAQ.webp"
        alt="Blocks spelling out the word FAQ"
        myHeight="h-[15rem] llg:h-[35rem]"
      />
      <h2 className="text-center text-[3rem] mt-[1rem] text-primary">
        {Title}
      </h2>
      <PageView>
        {faqQuestions ? <FAQAccordion faqs={faqQuestions} /> : null}
      </PageView>
    </>
  );
}
