import { fetchRegistrationData } from "lib/fetchRegistration";
import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import HeroMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
import NoData from "@/components/shared/NoData";
import FeeTables from "@/components/shared/feeTables";
import RegistrationCardComponent from "./components/RegistrationCard";
import WYSIWYG from "@/components/shared/WYSIWYG";
import MyButton from "@/components/shared/myButton";

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
    Title,
    RegistrationCard,
    my_tables,
    RegistrationRichText,
    nextYearRegistrationButton,
    error,
    RegistrationDescription,
    isCurrentYear,
  } = await fetchRegistrationData("currentYear");

  if (error || !Title) {
    return <NoData />;
  }

  const registrationButton = () => {
    if (nextYearRegistrationButton) {
      if (isCurrentYear) {
        return (
          <MyButton
            className="h-[4rem]"
            href="/registration2"
            label="Looking for this year?"
          />
        );
      } else if (!isCurrentYear) {
        return (
          <MyButton
            className="h-[4rem]"
            href="/registration"
            label="Looking for next year?"
          />
        );
      }
    }
  };

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
        <div className="flex flex-col llg:flex-row items-center mb-[2rem] llg:mb-0 llg:items-start justify-between">
          <div className="flex flex-col gap-2">
            <HeroH1 className="text-center llg:text-left text-primary text-6xl">
              {Title}
            </HeroH1>
            <h2 className="text-center text-2xl py-6 llg:py-12 llg:text-left">
              <WYSIWYG content={RegistrationDescription} />
            </h2>
          </div>
          {registrationButton()}
        </div>
        <div
          id="card grid"
          className="grid grid-cols-1 gap-6 llg:gap-16 llg:grid-cols-4"
        >
          {RegistrationCard ? (
            <RegistrationCardComponent data={RegistrationCard} />
          ) : null}
        </div>
        <FeeTables tables={my_tables.data} />
        {RegistrationRichText ? (
          <WYSIWYG
            content={RegistrationRichText}
            linkAriaLabel="Link to preschools payment portal"
          />
        ) : null}
      </PageView>
    </>
  );
}
