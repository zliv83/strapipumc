import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import FormsInfo from "./components/FormsInfo";
import FormsAndHandbook from "./components/FormsAndHandbook";
import PageView from "@/components/shared/pageView";

const {
  data: { attributes },
} = await fetchStrapi("/form", { populate: "deep" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescriptions,
};

export default async function Forms() {
  const image = attributes.HeroImage.data.attributes;
  const hero = {
    img: image.url,
    alt: image.alternativeText,
  };

  return (
    <>
      <Hero
        img={hero.img}
        alt={hero.alt}
        size="about"
        className="object-[0%_65%] "
      />
      <PageView className="llg:bg-PumcBlue">
        <FormsInfo />
        <FormsAndHandbook />
      </PageView>
    </>
  );
}
