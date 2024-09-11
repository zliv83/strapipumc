import dynamic from "next/dynamic";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import FormsInfo from "./components/FormsInfo";
const FormsAndHandbook = dynamic(() => import("./components/FormsAndHandbook"));

const {
  data: { attributes },
} = await fetchStrapi("/form", { populate: "deep" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default async function Forms() {
  return (
    <>
      <Hero
        img="/forms.webp"
        alt="A folder with Forms on its tab over a keyboard"
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
