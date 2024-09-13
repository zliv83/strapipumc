import dynamic from "next/dynamic";
import { fetchStrapi } from "lib/fetchStrapi";
import { Divider } from "@nextui-org/divider";
import { Card } from "@nextui-org/card";

import { BlockH1 } from "@/components/shared/h1s";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import FormsInfo from "./components/FormsInfo";
import AttributesChecker from "@/components/shared/AttributesChecker";
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
  const { formsInfo, Form } = attributes;
  return (
    <AttributesChecker attributes={attributes}>
      <Hero
        img="/forms.webp"
        alt="A folder with Forms on its tab over a keyboard"
        myHeight="h-[15rem] llg:h-[25rem] "
        className="object-[0%_65%] "
      />
      <PageView className="llg:bg-PumcBlue">
        <section>
          <h1 className="text-primary text-center text-4xl pt-6 llg:pt-0 llg:text-7xl">
            Forms Information
          </h1>
          <Divider className="my-6 llg:my-12" />
          {formsInfo && <FormsInfo formInfo={formsInfo} />}
        </section>
        <section>
          <BlockH1 className="pb-6 text-primary">Forms and Handbook</BlockH1>
          <Card className="p-8">
            {Form && <FormsAndHandbook form={Form} />}
          </Card>
        </section>
      </PageView>
    </AttributesChecker>
  );
}
