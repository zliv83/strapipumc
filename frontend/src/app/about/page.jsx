import dynamic from "next/dynamic";
import { Divider } from "@nextui-org/divider";
import pageData from "lib/pageData";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import WYSIWYG from "@/components/shared/WYSIWYG";
import Title from "./components/Title";
import NoData from "@/components/shared/NoData";
const MyTable = dynamic(() => import("@/components/shared/myTable"));

const { AboutParagraph, my_tables, ProgramOptions, metadata, hasError } =
  await pageData("/about-us", "deep, 5");

export { metadata };

export default function AboutUs() {
  if (hasError) {
    return <NoData />;
  }
  const table = my_tables?.data?.attributes?.tables;
  return (
    <>
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
            <Title className="text-center text-4xl llg:text-left">
              Over 30 years at Powell United Methodist Church - All Are Welcome
            </Title>
            {AboutParagraph ? (
              <WYSIWYG
                content={AboutParagraph}
                pClassName="text-xl text-center llg:text-left llg:text-2xl"
              />
            ) : null}
          </section>
          <section aria-label="Student/Teacher Ratio Table Section">
            <Title className="text-center text-4xl llg:text-left mb-6">
              Low Student to Teacher Ratios and Class Sizes
            </Title>
            {my_tables && (
              <MyTable
                columns={table.columns}
                rows={table.rows}
                ariaLabel="PUMC vs State Teacher to Student Ratios"
                className="pt-6"
              />
            )}
          </section>
          <section aria-label="Program Options Section">
            <Title>Program Options to fit your schedule</Title>
            {ProgramOptions && (
              <WYSIWYG content={ProgramOptions} pClassName="text-2xl" />
            )}
          </section>
        </div>
      </PageView>
    </>
  );
}
