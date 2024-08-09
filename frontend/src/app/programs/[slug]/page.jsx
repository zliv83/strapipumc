import { Divider } from "@nextui-org/divider";

import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import HeroMask from "@/components/shared/imageMask";
import Description from "@/components/programs/slug/description";
import QuickInfo from "@/components/programs/slug/quickInfo";
import Programming from "@/components/programs/slug/programming";

export default async function ProgramPage({ params }) {
  const fetchedData = await fetchStrapi("/programs", {
    populate: {
      quickInfo: { populate: "*" },
      programCardList: { populate: "*" },
      picture: { populate: "*" },
      classProgrammimng: { populate: "*" },
    },
  });
  const slug = params.slug;
  const program = fetchedData.data.find(
    (item) => item.attributes.slug === slug
  );
  const programData = program.attributes;
  const strapiData = {
    HeroImage: programData.picture.data.attributes.url,
    alt: programData.alt,
    Title: programData.title,
    ProgramDescription: programData.programDescription,
    QuickInfoTitle: programData.quickInfoTitle,
    QuickInfo: programData.quickInfo,
    ClassProgramming: programData.classProgrammimng,
    NutFree: programData?.nutFree,
  };

  return (
    <>
      <Hero size="programs" img={strapiData.HeroImage} alt={strapiData.alt}>
        <HeroMask />
        <HeroH1 className="z-30">{strapiData.Title}</HeroH1>
      </Hero>
      <div
        id="description and quick info"
        className="relative grid grid-cols-1 llg:grid-cols-[1.2fr_1fr]"
      >
        <Description programDescription={strapiData.ProgramDescription} />
        <QuickInfo
          title={strapiData.QuickInfoTitle}
          ageLabel={strapiData.QuickInfo?.age?.label}
          ageDescription={strapiData.QuickInfo?.age?.description}
          optionsListTitle={strapiData.QuickInfo.optionsListTitle}
          optionsList={strapiData.QuickInfo.optionsLIst}
          ratioLabel={strapiData.QuickInfo.Ratio.label}
          ratioDescription={strapiData.QuickInfo.Ratio.description}
          nutFree={strapiData?.NutFree}
        />
        <Divider className="absolute bottom-0 left-0 w-full" />
      </div>
      <div className="grid grid-cols-1 px-6 py-12 gap-12 llg:gap-20 llg:grid-cols-2 llg:p-24">
        {strapiData.ClassProgramming.map((program) => (
          <Programming key={program.id} classProgramming={program} />
        ))}
      </div>
    </>
  );
}
