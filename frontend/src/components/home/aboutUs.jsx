import { Image } from "@nextui-org/image";

import MyButton from "@/components/shared/myButton";
import BlockContainer from "@/components/home/blockContainer";
import { BlockH1 } from "@/components/shared/h1s";

const AboutUs = ({ aboutus }) => {
  return (
    <BlockContainer>
      <div className="relative">
        <div className="absolute">
          <Image
            src="http://localhost:1337/uploads/Butterfly_151b660a14.svg"
            alt=""
            aria-hidden="true"
            className="h-[200px] w-[200px] llg:h-[300px] llg:w-[300px] top-0 left-0 z-10 -mt-32 llg:-mt-36 -ml-12 llg:ml-[63rem] llg:left-auto llg:right-0 llg:mr-12"
          ></Image>
        </div>
        <div
          id="grid"
          className="grid grid-cols-1 gap-6 llg:grid-cols-[1.3fr_1fr_auto]"
        >
          <BlockH1 className="llg:hidden">About Us</BlockH1>
          <Image
            src="http://localhost:1337/uploads/aboutus_497cb52fe8.jpeg"
            alt="Teacher reading a book to children"
            className="w-full" // Adjust as needed
          />
          <p className="text-lg text-center llg:hidden">{aboutus}</p>
          <div className="hidden llg:flex flex-col gap-4 justify-center p-4">
            <BlockH1>About Us</BlockH1>
            <p className="text-2xl text-left">{aboutus}</p>
          </div>
          <div className="flex justify-center">
            <MyButton
              label="Learn More"
              href="/aboutUs"
              size="lg"
              landscapeBlock
            />
          </div>
        </div>
      </div>
    </BlockContainer>
  );
};

export default AboutUs;
