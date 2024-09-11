import dynamic from "next/dynamic";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import HeroMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
const FeeTables = dynamic(() => import("@/components/shared/feeTables"));
const RegistraionCard = dynamic(() => import("./components/RegistrationCard"));
const WYSIWYG = dynamic(() => import("@/components/shared/WYSIWYG"));

const {
  data: { attributes },
} = await fetchStrapi("/registration", { populate: "deep, 5" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function Registration() {
  return (
    <>
      <Hero
        img="/registration.webp"
        alt="A blackboard coverd with rainbows and clouds"
        myHeight="h-[15rem] llg:h-[28rem]"
      >
        <HeroH1 className="z-30">{attributes.HeroTitle}</HeroH1>
        <HeroMask />
      </Hero>
      <PageView className="llg:bg-PumcYellow">
        <HeroH1 className="text-center llg:text-left text-primary text-6xl">
          {attributes.Title}
        </HeroH1>
        <h2 className="text-center text-2xl py-6 llg:py-12 llg:text-left">
          {attributes.SubTitle}
        </h2>
        <div
          id="card grid"
          className="grid grid-cols-1 gap-6 llg:gap-16 llg:grid-cols-4"
        >
          <RegistraionCard data={attributes.RegistraionCard} />
        </div>
        <FeeTables tables={attributes.my_tables.data} />
        <WYSIWYG
          content={attributes.RegistrationRichText}
          linkAriaLabel="Link to preschools payment portal"
        />
      </PageView>
    </>
  );
}
