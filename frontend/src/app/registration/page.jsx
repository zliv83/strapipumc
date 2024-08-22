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
} = await fetchStrapi("/registration", {
  populate: "deep, 5",
});

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
};

export default async function Registration() {
  const image = attributes.HeroImage.data.attributes;

  const registrationCards = attributes.Registration.map((card) => {
    return (
      <ProgramRegistrationCard
        key={card.id}
        href={card.href}
        img={card.programs.data[0].attributes.picture.data.attributes.url}
        alt={
          card.programs.data[0].attributes.picture.data.attributes
            .alternativeText
        }
        title={card.programs.data[0].attributes.title}
        height={card.programs.data[0].attributes.picture.data.attributes.height}
        width={card.programs.data[0].attributes.picture.data.attributes.width}
        cardHeight="min-h-[10rem]"
        titleColor="text-primary"
      >
        <span className="text-center llg:text-2xl">{card.Schedule}</span>
        <span
          className={`${card.open ? "invisible" : ""} text-PumcRed llg:text-lg`}
        >
          Class is full
        </span>
      </ProgramRegistrationCard>
    );
  });

  return (
    <>
      <Hero img={image.url} alt={image.alternativeText}>
        <HeroH1 className="z-30">{attributes.HeroTitle}</HeroH1>
        <HeroMask />
      </Hero>
      <PageView className="llg:bg-PumcYellow">
        <HeroH1 className="text-center llg:text-left text-primary text-6xl">
          {attributes.Title}
        </HeroH1>
        <h2 className="text-center text-4xl py-6 llg:py-12 llg:text-left">
          {attributes.SubTitle}
        </h2>
        <div id="card grid" className="grid grid-cols-1 gap-6 llg:grid-cols-3">
          {registrationCards}
        </div>
        <FeeTables tables={attributes.my_tables.data} />
        <WYSIWYG content={attributes.RegistrationRichText} />
      </PageView>
    </>
  );
}
