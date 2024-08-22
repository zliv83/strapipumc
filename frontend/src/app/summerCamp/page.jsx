import Image from "next/image";

import { fetchStrapi, host } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import SummerCampInfo from "./components/summerCampInfo";

const {
  data: { attributes },
} = await fetchStrapi("/summer-camp", { populate: "deep" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
};

export default async function SummerCamp() {
  const heroImg = attributes.HeroImage.data.attributes;
  const sunImg = attributes.SunPicture.data.attributes;

  const Sun = () => {
    return (
      <div className="max-h-24 max-w-24">
        <Image
          src={`${host}${sunImg.url}`}
          alt={sunImg.alternativeText}
          width={sunImg.width}
          height={sunImg.height}
        />
      </div>
    );
  };

  const Subtitle = () => (
    <h3 className="text-4xl text-center">{attributes.SubTitle}</h3>
  );

  const Desktop = () => (
    <div className="hidden llg:flex flex-col gap-12">
      <div className="flex flex-row items-center gap-12 self-center">
        <Sun />
        <Subtitle />
        <Sun />
      </div>
      <SummerCampInfo summerCampInfo={attributes.SummerCampInfo} />
    </div>
  );

  const Mobile = () => (
    <div className="flex flex-col gap-12 llg:hidden items-center">
      <Subtitle />
      <Sun />
      <SummerCampInfo summerCampInfo={attributes.SummerCampInfo} />
      <Sun />
    </div>
  );

  return (
    <>
      <Hero img={heroImg.url} alt={heroImg.alternativeText} size="board" />
      <PageView className="llg:bg-PumcYellow">
        <div className="flex flex-col gap-12">
          <h1 className="text-center text-6xl llg:text-9xl text-primary">
            {attributes.Title}
          </h1>
          <Desktop />
          <Mobile />
        </div>
      </PageView>
    </>
  );
}
