import { Image } from "@nextui-org/image";

import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import MyButton from "@/components/shared/myButton";
import { HeroH1 } from "@/components/shared/h1s";
import { fetchStrapi, host } from "lib/fetchStrapi";
import PageView from "@/components/shared/pageView";
import ProgramGrid from "@/components/shared/programGrid";
import WYSIWYG from "@/components/shared/WYSIWYG";

const {
  data: { attributes },
} = await fetchStrapi("/programs-page", {
  populate: "deep, 4",
});

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
};

export default async function Programs() {
  const heroImg = attributes.HeroImage.data.attributes;

  const Butterfly = () => {
    return (
      <div className="hidden llg:flex absolute bottom-0 right-0 mr-48 mb-24">
        <Image
          src={`${host}/uploads/Butterfly_151b660a14.svg`}
          alt=""
          aria-hidden="true"
          className="h-[300px] w-[300px]"
        />
      </div>
    );
  };

  return (
    <>
      <Hero img={heroImg.url} alt={heroImg.alternativeText}>
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
          className="hidden llg:flex llg:self-end"
        />
        <ProgramGrid
          shadow="lg"
          className="pt-6 llg:pt-12"
          titleColor="text-PumcBlue llg:text-primary"
        />{" "}
        <MyButton
          label="Tuition Info"
          size="lg"
          href="/payments"
          className="self-center llg:hidden my-8"
        />
        <Butterfly />
      </PageView>
    </>
  );
}
