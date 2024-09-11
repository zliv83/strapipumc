import dynamic from "next/dynamic";
import { Divider } from "@nextui-org/divider";

import imgHelper from "lib/imgHelper";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import { HeroH1 } from "@/components/shared/h1s";
import HeroMask from "@/components/shared/imageMask";
import MyButton from "@/components/shared/myButton";
const Programming = dynamic(() => import("../components/programming"));
import WYSIWYG from "@/components/shared/WYSIWYG";

const { data } = await fetchStrapi("/programs", { populate: "deep" });

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const program = data.find((item) => item.attributes.slug === slug);
  const attributes = program.attributes;
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
    robots: {
      index: true,
    },
  };
}

export default async function ProgramPage({ params }) {
  const slug = params.slug;
  const program = data.find((item) => item.attributes.slug === slug);
  const attributes = program.attributes;
  const title = attributes.title;
  const { image, alternativeText } = imgHelper(title);

  return (
    <>
      <Hero
        img={image}
        alt={alternativeText}
        myHeight="h-[15rem] llg:h-[35rem] "
      >
        <HeroMask />
        <HeroH1 className="z-30">{attributes.title}</HeroH1>
      </Hero>
      <div
        id="description and quick info"
        className="relative grid grid-cols-1 llg:grid-cols-[1.2fr_1fr]"
      >
        <div id="description" className="flex flex-col p-8 llg:p-20 gap-12">
          <h2 className="text-center llg:text-left text-3xl">
            {attributes.programDescription}
          </h2>
          <MyButton
            className="self-center llg:self-end"
            label="Tuition Info"
            size="lg"
            href="/registration"
            ariaLabel="Link to the registration page"
          />
        </div>
        <div
          id="quick info"
          className="bg-PumcBlue text-background flex pl-12 py-6 llg:pl-24"
        >
          <WYSIWYG
            content={attributes.QuickInfo}
            pClassName="text-3xl"
            liClassName="ml-8"
          />
        </div>
        <Divider className="absolute bottom-0 left-0 w-full" />
      </div>
      <div className="grid grid-cols-1 px-6 py-12 gap-12 llg:gap-20 llg:grid-cols-2 llg:p-24">
        {attributes.classProgrammimng.map((program) => (
          <Programming key={program.id} classProgramming={program} />
        ))}
      </div>
    </>
  );
}
