import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import HeroMask from "@/components/shared/imageMask";
import { HeroH1 } from "@/components/shared/h1s";
import PageCard from "@/components/shared/pageCard";
import ProgramRegistrationCard from "@/components/shared/programRegistrationCard";

export default async function Registration() {
  const urlParamsObject = {
    populate: {
      HeroImage: { populate: "*" },
      Registration: {
        populate: {
          programs: {
            populate: {
              picture: { populate: "*" }, // Deeply populate the picture field
            },
          },
        },
      },
    },
  };
  const fetchedData = await fetchStrapi("/registration", urlParamsObject);

  const data = fetchedData.data.attributes;
  const strapiData = {
    HeroImage: data.HeroImage.data.attributes.url,
    alt: data.alt,
    HeroTitle: data.HeroTitle,
    Title: data.Title,
    SubTitle: data.SubTitle,
    Registration: data.Registration,
  };
  //console.log(data.Registration[0].programs.data[0].attributes.picture.data);
  const registrationCards = strapiData.Registration.map((card) => {
    return (
      <ProgramRegistrationCard
        key={card.id}
        href={card.href}
        img={card.programs.data[0].attributes.picture.data.attributes.url}
        alt={card.programs.data[0].attributes.alt}
        title={card.programs.data[0].attributes.title}
        height={card.programs.data[0].attributes.picture.data.attributes.height}
        width={card.programs.data[0].attributes.picture.data.attributes.width}
        cardHeight="min-h-[10rem]"
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
      <Hero img={strapiData.HeroImage} alt={strapiData.alt}>
        <HeroH1 className="z-30">{strapiData.HeroTitle}</HeroH1>
        <HeroMask />
      </Hero>
      <div id="background" className="bg-PumcYellow p-4 llg:p-8">
        <PageCard>
          <h1 className="text-center text-primary text-6xl">
            {strapiData.Title}
          </h1>
          <h2 className="text-center text-4xl py-12">{strapiData.SubTitle}</h2>
          <div
            id="card grid"
            className="grid grid-cols-1 gap-6 llg:grid-cols-3"
          >
            {registrationCards}
          </div>
        </PageCard>
      </div>
    </>
  );
}
