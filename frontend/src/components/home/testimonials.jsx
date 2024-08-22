import Image from "next/image";

import { host } from "lib/fetchStrapi";

import MyButton from "@/components/shared/myButton";
import { BlockH1 } from "@/components/shared/h1s";
import BlockContainer from "@/components/home/blockContainer";
import HeroMask from "@/components/shared/imageMask";

export default function TestimonialSection({ img, alt, children }) {
  return (
    <div className="relative w-full">
      <Image
        src={`${host}${img}`}
        alt={alt}
        fill
        className="object-cover"
        aria-label={alt}
        priority
      />
      <HeroMask />
      <BlockContainer
        id="children container"
        className="flex-col items-center justify-start gap-8 llg:gap-24"
      >
        <BlockH1 className="text-primary z-10 font-extrabold drop-shadow-2xl z-30">
          Testimonials
        </BlockH1>
        {children}
        <MyButton
          label="See More"
          className="z-30"
          size="lg"
          href="/testimonials"
          landscapeBlock
        />
      </BlockContainer>
    </div>
  );
}
