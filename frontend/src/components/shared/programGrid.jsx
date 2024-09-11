import imgHelper from "lib/imgHelper";
import ProgramRegistrationCard from "@/components/shared/programRegistrationCard";
import MyStarIcon from "@/components/shared/starIcon";

export default async function ProgramGrid({
  className,
  titleColor,
  programsData,
}) {
  const programCardItems = programsData.data.map((item) => {
    const programcard = item.attributes;
    const title = programcard.title;
    const { image, alternativeText } = imgHelper(title);

    return {
      img: image,
      height: programcard.picture.data.attributes.height,
      width: programcard.picture.data.attributes.width,
      alt: alternativeText,
      description: programcard.programCardList.map(
        (item) => item.ProgramListItem
      ),
      title: `${programcard.title}`,
      href: `/programs/${programcard.slug}`,
      ariaLabel: `Link to ${programcard.title}`,
    };
  });
  const cardList = programCardItems.map((item, i) => {
    return (
      <ProgramRegistrationCard
        key={i}
        href={item.href}
        img={item.img}
        alt={item.alt}
        width={1280}
        height={853}
        title={item.title}
        titleColor={titleColor}
        ariaLabel={item.ariaLabel}
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
    <div>
      <div
        id="card grid"
        className={`grid grid-col-1 gap-6 llg:grid-cols-4 ${className}`}
      >
        {cardList}
      </div>
    </div>
  );
}
