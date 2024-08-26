import { fetchStrapi } from "lib/fetchStrapi";
import MetaData from "@/components/shared/metaData";
import Hero from "@/components/shared/hero";
import FormsInfo from "./components/FormsInfo";
import FormsAndHandbook from "./components/FormsAndHandbook";
import PageView from "@/components/shared/pageView";

const route = "/form";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
  };
}

export default async function Forms() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  const image = attributes.HeroImage.data.attributes;
  const hero = {
    img: image.url,
    alt: image.alternativeText,
  };

  return (
    <>
      <MetaData
        title={attributes.meta.metaTitle}
        description={attributes.meta.metaDescription}
      />
      <Hero
        img={hero.img}
        alt={hero.alt}
        size="about"
        className="object-[0%_65%] "
      />
      <PageView className="llg:bg-PumcBlue">
        <FormsInfo
          formInfo={attributes.form_information.data.attributes.FormsInfo}
          title={attributes.FormsInfoTitle}
        />
        <FormsAndHandbook
          title={attributes.FormsAndHandbookTitle}
          form={attributes.Form}
        />
      </PageView>
    </>
  );
}
