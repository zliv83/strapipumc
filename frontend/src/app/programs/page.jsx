import dynamic from "next/dynamic";
import pageData from "lib/pageData";
import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import MyButton from "@/components/shared/myButton";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
const ProgramGrid = dynamic(() => import("@/components/shared/programGrid"));
import WYSIWYG from "@/components/shared/WYSIWYG";
import Butterfly from "@/components/shared/butterfly";
import NoData from "@/components/shared/NoData";

const { ProgramsIntro, programs, metadata, hasError } = await pageData(
  "/programs-page",
  "deep, 4"
);

export { metadata };

export default function Programs() {
  if (hasError) {
    return <NoData />;
  }
  return (
    <>
      <Hero
        img="/programs.webp"
        alt="Children playing with toys"
        myHeight="h-[15rem] llg:h-[25rem] "
      >
        <HeroH1 className="z-30">Programs</HeroH1>
        <ImageMask />
      </Hero>
      <PageView className="llg:bg-PumcYellow">
        <h1 className="text-primary text-center llg:text-left text-6xl llg:text-8xl">
          View Our Programs
        </h1>
        <WYSIWYG
          content={ProgramsIntro}
          pClassName="text-2xl text-center llg:text-left llg:text-4xl"
        />
        <MyButton
          alignment="hidden llg:flex llg:self-end"
          label="Tuition Info"
          size="lg"
          href="/payments"
          ariaLabel="Link to the payments page"
        />
        <ProgramGrid
          shadow="lg"
          className="pt-6 llg:pt-12"
          titleColor="text-PumcBlue llg:text-primary"
          programsData={programs}
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
