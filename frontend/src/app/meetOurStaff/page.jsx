import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import Staff from "./components/staff";
import WYSIWYG from "@/components/shared/WYSIWYG";
import PageView from "@/components/shared/pageView";

const route = "/staff-page";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
  };
}

export default async function MeetOurStaff() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  const heroImg = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img="https://helpful-positivity-9e5f57aa9a.media.strapiapp.com/staff_4a87437ee4.webp"
        alt={heroImg.alternativeText}
        height="h-[15rem] llg:h-[45rem]"
      >
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
