import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import HeroMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";
import FeeTables from "@/components/shared/feeTables";
import RegistraionCardCompnent from "./components/RegistrationCard";
import WYSIWYG from "@/components/shared/WYSIWYG";

export const dynamic = "force-dynamic";

const {
  data: {
    attributes: { meta },
  },
} = await fetchStrapi("/registration", { populate: "deep, 5" });

export const metadata = {
  title: meta?.metaTitle,
  description: meta?.metaDescription,
  robots: { index: true },
};

export default async function Registration() {
  const {
    data: {
      attributes: {
        Title,
        RegistraionCard,
        my_tables,
        RegistrationRichText,
        nextYearRegistration,
      },
      error,
    },
  } = await fetchStrapi("/registration", { populate: "deep, 5" });
  if (error) {
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
