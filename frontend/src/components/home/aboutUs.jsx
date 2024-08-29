import Image from "next/image";

import MyButton from "@/components/shared/myButton";
import BlockContainer from "@/components/home/blockContainer";
import { BlockH1 } from "@/components/shared/h1s";
import Butterfly from "@/components/shared/butterfly";

const AboutUs = ({ aboutus, img, alt, height, width }) => {
  return (
    <BlockContainer>
      <div className="relative">
        <div className="absolute">
          <Butterfly className="h-[200px] w-[200px] llg:h-[300px] llg:w-[300px] top-0 left-0 z-10 -mt-32 llg:-mt-36 -ml-12 llg:ml-[63rem] llg:left-auto llg:right-0 llg:mr-12" />
        </div>
        <div
          id="grid"
          className="grid grid-cols-1 gap-6 llg:grid-cols-[1.3fr_1fr_auto]"
        >
          <BlockH1 className="llg:hidden">About Us</BlockH1>
          <Image
            src={img}
            alt={alt}
            height={height}
            width={width}
            className="rounded-xl"
          />
          <p className="text-lg text-center llg:hidden">{aboutus}</p>
          <div className="hidden llg:flex flex-col gap-4 justify-center p-4">
            <BlockH1>About Us</BlockH1>
            <p className="text-2xl text-left">{aboutus}</p>
          </div>
          <div className="flex justify-center">
            <MyButton
              label="Explore Our Mission"
              href="/about"
              ariaLabel="Link to the about page"
              landscapeBlock
              className="w-button-mobile-lg llg:w-button-lg"
            />
          </div>
        </div>
      </div>
    </BlockContainer>
  );
};

export default AboutUs;
