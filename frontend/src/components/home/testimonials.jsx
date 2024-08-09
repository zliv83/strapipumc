import MyButton from "@/components/shared/myButton";
import BlockContainer from "@/components/shared/blockContainer";
import { BlockH1 } from "@/components/shared/h1s";

const Testimonials = ({ children }) => {
  return (
    <div className="relative w-full">
      <div className="bg-[url('http://localhost:1337/uploads/testimonials_Background_a6e43725d0.webp')] bg-cover bg-center">
        <div className=" bg-black/20 llg:bg-black/40">
          <BlockContainer
            id="children container"
            className="flex-col items-center justify-start gap-8 llg:gap-24"
          >
            <BlockH1 className="text-primary z-10 font-extrabold drop-shadow-2xl">
              Testimonials
            </BlockH1>
            {children}
            <MyButton
              label="See More"
              className="z-10"
              size="lg"
              href="/testimonials"
              landscapeBlock
            />
          </BlockContainer>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
