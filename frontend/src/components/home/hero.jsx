import Image from "next/image";
import ImageMask from "@/components/shared/imageMask";
import MyButton from "@/components/shared/myButton";

const HomeHero = ({ title, subTitle }) => {
  return (
    <section className={`relative w-full h-[100vh] llg:h-screen`}>
      <Image
        src="/HomeHero.webp"
        alt="Child coloring in a butterfly"
        fill
        className={`object-cover`}
        aria-label="Child coloring in a butterfly"
        priority
      />
      <ImageMask />
      <div className="z-30 absolute pb-20 llg:pb-28 llg:w-[80%] h-full flex flex-col justify-center gap-20 llg:pl-12">
        <div>
          <h1 className="text-center llg:text-left text-6xl llg:text-9xl text-background pb-2">
            {title}
          </h1>
          <h2 className="text-4xl llg:text-6xl text-center llg:text-left text-[#90ACE6]">
            {subTitle}
          </h2>
        </div>
        <MyButton
          label="Register Now"
          size="lg"
          href="/registration"
          ariaLabel="Link to the registration page"
          className="llg:hidden self-center"
        />
      </div>
    </section>
  );
};

export default HomeHero;
