import dynamic from "next/dynamic";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
import WYSIWYG from "@/components/shared/WYSIWYG";
const Staff = dynamic(() => import("./components/staff"));

const {
  data: { attributes },
} = await fetchStrapi("/staff-page", { populate: "deep" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function MeetOurStaff() {
  const heroImg = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img="/staff.webp"
        alt="Chalkboard with a rocket and planets on it in the background with a desk with teacher items in the forgound"
        myHeight="h-[15rem] llg:h-[28rem]"
      >
        <ImageMask />
        <HeroH1 className="z-30">{attributes.HeroTitle}</HeroH1>
      </Hero>
      <PageView>
        <h2 className="text-primary text-center text-5xl llg:text-6xl">
          {attributes.StaffInfoTitle}
        </h2>
        <WYSIWYG
          content={attributes.StaffInfoText}
          pClassName="text-2xl llg:text-2xl text-center llg:text-left"
        />
        <div className="pb-12" />
        <Staff />
      </PageView>
    </>
  );
}
