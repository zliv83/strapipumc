import dynamic from "next/dynamic";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import MyButton from "@/components/shared/myButton";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
const ProgramGrid = dynamic(() => import("@/components/shared/programGrid"));
import WYSIWYG from "@/components/shared/WYSIWYG";
import Butterfly from "@/components/shared/butterfly";

const {
  data: { attributes },
} = await fetchStrapi("/programs-page", { populate: "deep, 4" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function Programs() {
  const heroImg = attributes.HeroImage.data.attributes;

  return (
    <>
      <Hero
        img="/programs.webp"
        alt="Children playing with toys"
        myHeight="h-[15rem] llg:h-[25rem] "
      >
        <HeroH1 className="z-30">{attributes.HeroText}</HeroH1>
        <ImageMask />
      </Hero>
      <PageView className="llg:bg-PumcYellow">
        <h1 className="text-primary text-center llg:text-left text-6xl llg:text-8xl">
          {attributes.Title}
        </h1>
        <WYSIWYG
          content={attributes.ProgramsIntro}
          pClassName="text-2xl text-center llg:text-left llg:text-4xl"
        />
        <MyButton
          label="Tuition Info"
          size="lg"
          href="/payments"
          ariaLabel="Link to the payments page"
          className="hidden llg:flex llg:self-end"
        />
        <ProgramGrid
          shadow="lg"
          className="pt-6 llg:pt-12"
          titleColor="text-PumcBlue llg:text-primary"
          programsData={attributes.programs}
        />
        <MyButton
          label="Tuition Info"
          size="lg"
          href="/payments"
          ariaLabel="link to the payments page"
          className="self-center llg:hidden my-8"
        />
        <Butterfly />
      </PageView>
    </>
  );
}
