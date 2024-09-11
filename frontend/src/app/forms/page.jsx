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
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
}

export default async function Forms() {
  const image = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img={image.url}
        alt={image.alternativeText}
        height={image.height}
        width={image.width}
        myHeight="h-[15rem] llg:h-[25rem] "
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
