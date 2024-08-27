import Image from "next/image";
import ImageMask from "@/components/shared/imageMask";
import MyButton from "@/components/shared/myButton";

const HomeHero = ({ img, title, subTitle, alt }) => {
  return (
    <section className={`relative w-full h-[40rem] llg:h-[45rem]`}>
      <Image
        src={img}
        alt={alt}
        fill
        className={`object-cover`}
        aria-label={alt}
        priority
      />
      <ImageMask />
      <div className="z-30 absolute llg:w-[80%] pt-20 flex flex-col gap-6 llg:pt-12 llg:pl-12">
        <h1 className="text-center llg:text-left text-6xl llg:text-9xl text-background">
          {title}
        </h1>
        <h2 className="text-4xl llg:text-6xl text-center llg:text-left text-[#90ACE6]">
          {subTitle}
        </h2>
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
