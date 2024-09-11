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
    const imageFileName = title
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();
    const imageUrl = `/${imageFileName}.webp`;

    let alternativeText;
    switch (title) {
      case "2 Year Old Playgroup":
        alternativeText = "Child playing with a toy";
        break;
      case "3 Year Old Preschool":
        alternativeText = "Child playing with blocksl";
        break;
      case "4/5's Pre-K":
        alternativeText = "Child Picking out a book";
        break;
      case "Kindergarten Enrichment":
        alternativeText =
          "Childrens hands with one letter on each spelling testimonials";
        break;
      default:
        alternativeText = `Image for ${title}`;
    }
    return {
      img: imageUrl,
      height: programcard.picture.data.attributes.height,
      width: programcard.picture.data.attributes.width,
      alt: programcard.picture.data.attributes.alternativeText,
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
        width={item.width}
        height={item.height}
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
