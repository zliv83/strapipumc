import { Divider } from "@nextui-org/divider";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import WYSIWYG from "@/components/shared/WYSIWYG";
import MyTable from "@/components/shared/myTable";

const route = "/about-us";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
    robots: {
      index: true,
    },
  };
}

export default async function AboutUs() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep, 5" });
  const heroImg = attributes.HeroImage.data.attributes;

  const Title = ({ children }) => {
    return (
      <h2 className="text-primary text-center text-4xl llg:text-left">
        {children}
      </h2>
    );
  };
  return (
    <>
      <Hero
        img={heroImg.url}
        alt={heroImg.alternativeText}
        height={heroImg.height}
        width={heroImg.width}
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
              {attributes.Title}
            </Title>
            <WYSIWYG
              content={attributes.AboutParagraph}
              pClassName="text-xl text-center llg:text-left llg:text-2xl"
            />
          </section>
          <section aria-label="Student/Teacher Ratio Table Section">
            <Title className="text-center text-4xl llg:text-left mb-6">
              {attributes.RatioTitle}
            </Title>
            <MyTable
              columns={attributes.my_tables.data.attributes.tables.columns}
              rows={attributes.my_tables.data.attributes.tables.rows}
              ariaLabel="PUMC vs State Teacher to Student Ratios"
              className="pt-6"
            />
          </section>
          <section aria-label="Program Options Section">
            <Title>{attributes.ProgramText}</Title>
            <WYSIWYG
              content={attributes.ProgramOptions}
              pClassName="text-2xl"
            />
          </section>
        </div>
      </PageView>
    </>
  );
}
