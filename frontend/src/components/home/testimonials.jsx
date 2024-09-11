import Image from "next/image";

import MyButton from "@/components/shared/myButton";
import { BlockH1 } from "@/components/shared/h1s";
import BlockContainer from "@/components/home/blockContainer";
import HeroMask from "@/components/shared/imageMask";

export default function TestimonialSection({ children }) {
  const alt = "blue background with rainbows and flowers";
  return (
    <div className="relative w-full">
      <Image
        src="/testimonialsBackground.webp"
        alt={alt}
        fill
        className="object-cover"
        aria-label={alt}
        priority
      />
      <HeroMask />
      <BlockContainer
        id="children container"
        className="flex-col items-center justify-start gap-8 llg:gap-12"
      >
        <BlockH1 className="text-primary z-10 font-extrabold drop-shadow-2xl z-30">
          Testimonials
        </BlockH1>
        {children}
        <MyButton
          label="Hear from our families"
          className="z-30 w-button-mobile-lg llg:w-button-lg"
          href="/testimonials"
          ariaLabel="Link to the testimonial page"
          landscapeBlock
        />
      </BlockContainer>
    </div>
  );
}
