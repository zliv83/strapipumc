import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import StaffGrid from "@/components/staff/staffGrid";
import BlockContainer from "@/components/shared/blockContainer";

import { fetchStrapi } from "lib/fetchStrapi";

export default async function MeetOurStaff() {
  const path = "/staff-page";
  const urlParamsObject = {
    populate: {
      populate: "*",
      HeroImage: { poulate: "*" },
    },
  };
  const fetchedData = await fetchStrapi(path, urlParamsObject);
  const data = fetchedData.data.attributes;

  const header = data.Header;
  const commaIndex = header.indexOf(",");

  const strapiData = {
    heroTitle: data.HeroTitle,
    heroImage: data.HeroImage.data.attributes.url,
    fullHeader: header,
    firstSlicedHeader: header.slice(0, commaIndex + 1),
    secondSlicedHeader: header.slice(commaIndex + 2),
    description: data.Description[0].children[0].text,
  };
  return (
    <>
      <Hero img={strapiData.heroImage}>
        <ImageMask />
        <HeroH1 className="z-30">{strapiData.heroTitle}</HeroH1>
      </Hero>
      <BlockContainer className="flex-col gap-36 ">
        <div>
          <h1 className="hidden text-6xl text-primary text-left pb-8 llg:flex">
            {strapiData.fullHeader}
          </h1>
          <h1 className="text-4xl text-primary text-center llg:hidden">
            {strapiData.firstSlicedHeader}
          </h1>
          <h1 className="text-4xl text-primary text-center pb-4 llg:hidden">
            {strapiData.secondSlicedHeader}
          </h1>
          <p className="text-xl text-center llg:text-left llg:text-3xl">
            {strapiData.description}
          </p>
        </div>
        <StaffGrid />
      </BlockContainer>
    </>
  );
}
