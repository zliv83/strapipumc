import dynamic from "next/dynamic";
import { Divider } from "@nextui-org/divider";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import WYSIWYG from "@/components/shared/WYSIWYG";
import Title from "./components/Title";
import AttributesChecker from "@/components/shared/AttributesChecker";
const ProgramTable = dynamic(() => import("./components/ProgramTable"));
const ProgramOptions = dynamic(() => import("./components/ProgramOptions"));

const {
  data: { attributes },
} = await fetchStrapi("/about-us", { populate: "deep, 5" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function AboutUs() {
  return (
    <AttributesChecker attributes={attributes}>
      <Hero
        img="/aboutus.webp"
        alt="Powell United Methodist Church's Logo"
        myHeight="h-[15rem] llg:h-[30rem]"
      />
      <PageView className="llg:bg-PumcGreen">
        <div className="flex flex-col gap-6">
          <h1 className="text-primary text-center text-6xl llg:text-[6rem] llg:text-left">
            About Us
          </h1>
          <Divider />
          <section aria-label="About Paragraph Section">
            {attributes.Title ? (
              <Title className="text-center text-4xl llg:text-left">
                {attributes.Title}
              </Title>
            ) : null}
            {attributes.AboutParagraph ? (
              <WYSIWYG
                content={attributes.AboutParagraph}
                pClassName="text-xl text-center llg:text-left llg:text-2xl"
              />
            ) : null}
          </section>
          {attributes.my_tables?.data === null ? null : (
            <ProgramTable
              title={attributes.RatioTitle}
              columns={attributes.my_tables.data.attributes.tables.columns}
              rows={attributes.my_tables.data.attributes.tables.rows}
            />
          )}
          {attributes.ProgramText && attributes.ProgramOptions ? (
            <ProgramOptions
              programText={attributes.ProgramText}
              programOptions={attributes.ProgramOptions}
            />
          ) : null}
        </div>
      </PageView>
    </AttributesChecker>
  );
}
