import MyButton from "@/components/shared/myButton";
import BeeBackground from "@/components/programs/beeBackground";
import { BlockH1 } from "@/components/shared/h1s";
import ProgramGrid from "@/components/programs/programGrid";

const Programs = () => {
  return (
    <BeeBackground main>
      <BlockH1 className="text-background">Programs</BlockH1>
      <ProgramGrid />
      <MyButton
        href="/programs"
        label="Learn More"
        size="lg"
        className="self-center z-30"
        landscapeBlock
      />
    </BeeBackground>
  );
};

export default Programs;
