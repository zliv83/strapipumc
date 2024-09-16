import dynamic from "next/dynamic";
import pageData from "lib/pageData";
import Hero from "@/components/shared/hero";
import HeroMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";
const FeeTables = dynamic(() => import("@/components/shared/feeTables"));
const RegistraionCardCompnent = dynamic(() =>
  import("./components/RegistrationCard")
);
const WYSIWYG = dynamic(() => import("@/components/shared/WYSIWYG"));

const {
  Title,
  RegistraionCard,
  my_tables,
  RegistrationRichText,
  metadata,
  hasError,
} = await pageData("/registration", "deep, 5");

export { metadata };

export default function Registration() {
  if (hasError) {
    return <NoData />;
  }
  return (
    <>
      <Hero
        img="/registration.webp"
        alt="A blackboard coverd with rainbows and clouds"
        myHeight="h-[15rem] llg:h-[28rem]"
      >
        <HeroH1 className="z-30">Registration</HeroH1>
        <HeroMask />
      </Hero>
      <PageView className="llg:bg-PumcYellow">
        <HeroH1 className="text-center llg:text-left text-primary text-6xl">
          {Title}
        </HeroH1>
        <h2 className="text-center text-2xl py-6 llg:py-12 llg:text-left">
          Select the desired class below to access the registration form, fill
          out and pay the registration fee (tables below)
        </h2>
        <div
          id="card grid"
          className="grid grid-cols-1 gap-6 llg:gap-16 llg:grid-cols-4"
        >
          <RegistraionCardCompnent data={RegistraionCard} />
        </div>
        <FeeTables tables={my_tables.data} />
        <WYSIWYG
          content={RegistrationRichText}
          linkAriaLabel="Link to preschools payment portal"
        />
      </PageView>
    </>
  );
}
