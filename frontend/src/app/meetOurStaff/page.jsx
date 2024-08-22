import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import Staff from "./components/staff";
import WYSIWYG from "@/components/shared/WYSIWYG";
import PageView from "@/components/shared/pageView";

import { fetchStrapi } from "lib/fetchStrapi";

const {
  data: { attributes },
} = await fetchStrapi("/staff-page", { populate: "deep" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
};

export default async function MeetOurStaff() {
  const heroImg = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero img={heroImg.url} alt={heroImg.alternativeText} size="about">
        <ImageMask />
        <HeroH1 className="z-30">{attributes.HeroTitle}</HeroH1>
      </Hero>
      <PageView>
        <h1 className="text-primary text-center text-5xl llg:text-6xl">
          {attributes.StaffInfoTitle}
        </h1>
        <WYSIWYG
          content={attributes.StaffInfoText}
          pClassName="text-2xl llg:text-3xl text-center llg:text-left"
        />
        <div className="pb-12" />
        <div className="flex flex-col gap-12">
          <Staff />
        </div>
      </PageView>
    </>
  );
}
