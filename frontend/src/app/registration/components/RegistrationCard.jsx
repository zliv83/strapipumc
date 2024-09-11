import ProgramRegistrationCard from "@/components/shared/programRegistrationCard";
import imgHelper from "lib/imgHelper";

export default function registrationCards({ data }) {
  const registrationCards = data.map((card) => {
    let modifierText;
    if (card.ClassFull) {
      modifierText = "Class Full";
    } else if (card.ClassCancelled) {
      modifierText = "Class Calncelled";
    }
    const title = card.ClassName;
    const { image, alternativeText } = imgHelper(title);

    return (
      <ProgramRegistrationCard
        key={card.id}
        href={card.href}
        img={image}
        alt={alternativeText}
        title={card.ClassName}
        height={853}
        width={1280}
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
