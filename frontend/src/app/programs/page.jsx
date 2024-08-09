import { Image } from "@nextui-org/image";

import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import BlockContainer from "@/components/shared/blockContainer";
import MyButton from "@/components/shared/myButton";
import { BlockH1, HeroH1 } from "@/components/shared/h1s";
import ProgramGrid from "@/components/programs/programGrid";
import PageCard from "@/components/shared/pageCard";
import { fetchStrapi, host } from "lib/fetchStrapi";

export default async function Programs() {
  const path = "/programs-page";
  const urlParamsObject = {
    populate: {
      ProgramHero: { populate: "*" },
      ProgramsIntro: { populate: "*" },
    },
  };
  const fetchedData = await fetchStrapi(path, urlParamsObject);
  const data = fetchedData.data.attributes;

  const strapiData = {
    url: data.ProgramHero.picture.data.attributes.url,
    heroTitle: data.ProgramHero.title,
    introTitle: data.ProgramsIntro.Header,
    mainIntro: data.ProgramsIntro.Details[0].children[0].text,
    subIntro: data.ProgramsIntro.SubDetails[0].children[0].text,
  };

  const paragraphFont =
    "text-center llg:text-left text-2xl llg:text-4xl text-extrabold";
  return (
    <>
      <Hero img={strapiData.url} alt="Children doing arts and crafts">
        <ImageMask />
        <HeroH1 className="z-30">{strapiData.heroTitle}</HeroH1>
      </Hero>
      <div className="relative">
        <div className="hidden llg:flex absolute bottom-0 right-0 mr-48 mb-24">
          <Image
            src={`${host}/uploads/Butterfly_151b660a14.svg`}
            alt="Decorative butterfly image"
            aria-label="Decorative butterfly image"
            aria-hidden="true"
            className="h-[300px] w-[300px]"
          />
        </div>
        <BlockContainer className="bg-PumcYellow">
          <PageCard className="pb-8">
            <div
              id="text and button container"
              className="flex flex-col gap-12"
            >
              <BlockH1 className="text-primary">
                {strapiData.introTitle}
              </BlockH1>
              <p className={`leading-snug llg:leading-tight ${paragraphFont}`}>
                {strapiData.mainIntro}
              </p>
              <p className={`${paragraphFont}`}>{strapiData.subIntro}</p>
              <MyButton
                label="Tuition Info"
                size="lg"
                href="/tuition"
                landscapeBlock
                className="self-center"
              />
            </div>
            <ProgramGrid shadow="lg" className=" pt-12" />
          </PageCard>
        </BlockContainer>
      </div>
    </>
  );
}
