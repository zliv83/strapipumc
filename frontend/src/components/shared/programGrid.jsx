import { fetchStrapi } from "lib/fetchStrapi";
import ProgramRegistrationCard from "@/components/shared/programRegistrationCard";
import MyStarIcon from "@/components/shared/starIcon";

export default async function ProgramGrid({ className, titleColor }) {
  const { data } = await fetchStrapi("/programs", {
    populate: "*",
  });

  const programCardItems = data.map((item) => {
    const programcard = item.attributes;
    return {
      img: programcard.picture.data.attributes.url,
      height: programcard.picture.data.attributes.height,
      width: programcard.picture.data.attributes.width,
      alt: programcard.picture.data.attributes.alternativeText,
      description: programcard.programCardList.map(
        (item) => item.ProgramListItem
      ),
      title: `${programcard.title}`,
      href: `/programs/${programcard.slug}`,
    };
  });
  const cardList = programCardItems.map((item, i) => {
    return (
      <ProgramRegistrationCard
        key={i}
        href={item.href}
        img={item.img}
        alt={item.alt}
        width={item.width}
        height={item.height}
        title={item.title}
        titleColor={titleColor}
      >
        <div id="Star list" className="hidden flex-col gap-4 llg:flex">
          {item.description.map((item, i) => (
            <div
              key={i}
              id="star list row"
              className="flex flex-row gap-2 items-around items-center"
            >
              <MyStarIcon color="#F17B20" />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </ProgramRegistrationCard>
    );
  });
  return (
    <div
      id="card grid"
      className={`grid grid-col-1 gap-6 llg:grid-cols-3 ${className}`}
    >
      {cardList}
    </div>
  );
}
