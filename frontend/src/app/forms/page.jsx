import { fetchStrapi } from "lib/fetchStrapi";
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

  return (
    <>
      <Hero
        img="https://helpful-positivity-9e5f57aa9a.media.strapiapp.com/forms_5943651233.webp"
        alt={image.alt}
        height={image.height}
        width={image.width}
        myHeight="h-[15rem] llg:h-[35rem] "
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
