import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import HeroMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import PageView from "@/components/shared/pageView";
import ProgramRegistrationCard from "@/components/shared/programRegistrationCard";
import FeeTables from "@/components/shared/feeTables";
import WYSIWYG from "@/components/shared/WYSIWYG";

const {
  data: { attributes },
} = await fetchStrapi("/registration", { populate: "deep, 5" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
}

export default function Registration() {
  const image = attributes.HeroImage.data.attributes;

  const registrationCards = attributes.RegistraionCard.map((card) => {
    let modifierText;
    if (card.ClassFull) {
      modifierText = "Class Full";
    } else if (card.ClassCancelled) {
      modifierText = "Class Calncelled";
    }
    const image = card.ClassPicture.data.attributes;
    return (
      <ProgramRegistrationCard
        key={card.id}
        href={card.href}
        img={image.url}
        alt={image.alternativeText}
        title={card.ClassName}
        height={image.height}
        width={image.width}
        cardHeight="llg:min-h-[30rem]"
        titleColor="text-primary"
      >
        <span className="text-center llg:text-2xl">{card.Schedule}</span>
        <div className="llg:mt-auto ">
          <span
            className={`${
              card.ClassFull || card.ClassCancelled ? "" : "invisible"
            } text-PumcRed llg:text-lg`}
          >
            {modifierText}
          </span>
        </div>
      </ProgramRegistrationCard>
    );
  });

  return (
    <>
      <Hero
        img={image.url}
        alt={image.alternativeText}
        height={image.height}
        width={image.width}
        myHeight="h-[15rem] llg:h-[20rem]"
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
          {registrationCards}
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
