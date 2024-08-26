import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import FAQAccordion from "./components/FAQAccordion";
import PageView from "@/components/shared/pageView";

const route = "/faq";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
  };
}

export default async function FAQ() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep, 6" });
  const image = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img="https://helpful-positivity-9e5f57aa9a.media.strapiapp.com/FAQ_51e75a7674.webp"
        alt={image.alternativeText}
        height={image.height}
        width={image.width}
        myHeight="h-[15rem] llg:h-[35rem]"
      />
      <PageView>
        <FAQAccordion faqs={attributes.faqQuestions} />
      </PageView>
    </>
  );
}
