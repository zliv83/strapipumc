import { Divider } from "@nextui-org/divider";

import { fetchStrapi } from "lib/fetchStrapi";
import { BlockH1 } from "@/components/shared/h1s";
import Hero from "@/components/shared/hero";
import PageCard from "@/components/shared/pageCard";
import MyTable from "@/components/shared/myTable";

const Title = ({ children, className }) => {
  return (
    <h2
      className={`text-primary text-4xl pt-6 text-center llg:text-left llg:pt-12 ${className}`}
    >
      {children}
    </h2>
  );
};

export default async function About() {
  const fetchedData = await fetchStrapi("/about-us", { populate: "*" });
  const data = fetchedData.data.attributes;
  const strapiData = {
    HeroImage: data.HeroImage.data.attributes.url,
    Title: data.Title,
    AboutParagraph: data.AboutParagraph,
    RatioTitle: data.RatioTitle,
    ProgramText: data.ProgramText,
    Columns: data.columns,
    Rows: data.rows,
    ProgramOptions: data.programOptions,
  };

  const aboutParagraphs = strapiData.AboutParagraph.map((paragraph, i) => (
    <p key={i} className="text-2xl pt-4 text-center llg:text-left llg:pt-6">
      {paragraph.children.map((child) => child.text).join("")}
    </p>
  ));

  const programOptions = strapiData.ProgramOptions.map((option) => (
    <div
      key={option.id}
      className="flex flex-col llg:flex-row llg:gap-4 llg:pt-6"
    >
      {" "}
      {/* Add flex-col for mobile */}
      <p className="font-bold text-2xl pb-2 llg:pb-0 text-center llg:text-left">
        {option.AgeGroup}
      </p>
      <span className="hidden llg:inline">-</span>{" "}
      {/* Only show hyphen on larger screens */}
      <p className="text-xl pb-2 llg:pb-0 text-center llg:text-left">
        {option.WeeklySchedule}
      </p>
    </div>
  ));

  return (
    <>
      <Hero size="about" img={strapiData.HeroImage} />
      <div className="bg-PumcGreen p-4 llg:p-12">
        <PageCard>
          <BlockH1 className="text-primary">About Us</BlockH1>
          <Divider />
          <Title>{strapiData.Title}</Title>
          {aboutParagraphs}
          <Title>{strapiData.RatioTitle}</Title>
          <MyTable
            className="pt-6"
            rows={strapiData.Rows}
            columns={strapiData.Columns}
            ariaLabel="PUMC vs State Teacher to Student Ratios"
          />
          <Title className="pb-6">{strapiData.ProgramText}</Title>
          {programOptions}
        </PageCard>
      </div>
    </>
  );
}
