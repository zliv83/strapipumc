import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
import WYSIWYG from "@/components/shared/WYSIWYG";
import NoData from "@/components/shared/NoData";
import Staff from "./components/staff";

export const dynamic = "force-dynamic";

const {
  data: {
    attributes: { meta },
  },
} = await fetchStrapi("/staff-page", { populate: "deep" });

export const metadata = {
  title: meta?.metaTitle,
  description: meta?.metaDescription,
  robots: { index: true },
};

export default async function MeetOurStaff() {
  const {
    data: {
      attributes: { staff, StaffInfoText },
      error,
    },
  } = await fetchStrapi("/staff-page", { populate: "deep" });
  if (error) {
    return <NoData />;
  }
  return (
    <>
      <Hero
        img="/staff.webp"
        alt="Chalkboard with a rocket and planets on it in the background with a desk with teacher items in the forgound"
        myHeight="h-[15rem] llg:h-[28rem]"
      >
        <ImageMask />
        <HeroH1 className="z-30">Meet Our Staff</HeroH1>
      </Hero>
      <PageView>
        <h2 className="text-primary text-center text-5xl llg:text-6xl">
          Our Caring & Qualified Team
        </h2>
        {StaffInfoText && (
          <WYSIWYG
            content={StaffInfoText}
            pClassName="text-2xl text-center llg:text-left"
          />
        )}
        <div className="pb-12" />
        {staff && <Staff staff={staff} />}
      </PageView>
    </>
  );
}
