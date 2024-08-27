import MyButton from "@/components/shared/myButton";
import BeeBackground from "./beeBackground";
import { BlockH1 } from "@/components/shared/h1s";
import ProgramGrid from "@/components/shared/programGrid";

const Programs = ({ img }) => {
  return (
    <BeeBackground main img={img}>
      <BlockH1 className="text-background">Programs</BlockH1>
      <ProgramGrid titleColor="text-primary llg:text-foreground" />
      <MyButton
        href="/programs"
        label="Learn More"
        size="lg"
        className="self-center z-30"
        ariaLabel="Link to the programs page"
        landscapeBlock
      />
    </BeeBackground>
  );
};

export default Programs;
