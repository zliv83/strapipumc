import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import MyButton from "@/components/shared/myButton";

const HomeHero = ({ img, title, description }) => {
  return (
    <Hero img={img} alt="Home hero" size="main">
      <ImageMask />
      <div className="flex flex-col gap-12 justify-start mt-16 p-6 llg:w-[80%] llg:text-left llg:p-12 leading-none z-30">
        <h1 className={`text-[3.4rem] llg:text-[8rem]`}>{title}</h1>
        <h2 className={`text-[2rem] llg:text-[4rem] text-[#90ACE6] `}>
          {description}
        </h2>
        <MyButton
          label="Register"
          size="lg"
          href="/registration"
          className="llg:hidden self-center"
        />
      </div>
    </Hero>
  );
};

export default HomeHero;
