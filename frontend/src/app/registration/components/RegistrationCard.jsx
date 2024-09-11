import ProgramRegistrationCard from "@/components/shared/programRegistrationCard";

export default function registrationCards({ data }) {
  const registrationCards = data.map((card) => {
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
  return registrationCards;
}
