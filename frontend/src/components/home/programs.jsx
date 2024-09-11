import MyButton from "@/components/shared/myButton";
import BeeBackground from "./beeBackground";
import { BlockH1 } from "@/components/shared/h1s";
import ProgramGrid from "@/components/shared/programGrid";

const Programs = ({ programsData }) => {
  return (
    <BeeBackground>
      <BlockH1 className="text-background">Programs</BlockH1>
      <ProgramGrid
        titleColor="text-primary llg:text-foreground"
        programsData={programsData}
      />
      <MyButton
        href="/programs"
        label="Explore Programs"
        className="self-center z-30 w-button-mobile-lg llg:w-button-lg"
        ariaLabel="Link to the programs page"
        landscapeBlock
      />
    </BeeBackground>
  );
};

export default Programs;
