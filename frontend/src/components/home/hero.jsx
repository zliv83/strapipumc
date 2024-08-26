import Hero from "@/components/shared/hero";
import ImageMask from "@/components/shared/imageMask";
import MyButton from "@/components/shared/myButton";

const HomeHero = ({ img, title, subTitle, alt }) => {
  return (
    <Hero img={img} alt={alt} size="main">
      <ImageMask />
      <div className="flex flex-col gap-6 justify-start mt-16 llg:w-[80%] llg:text-left llg:p-12 leading-none z-30">
        <h1 className={`text-[3.4rem] llg:text-[8rem]`}>{title}</h1>
        <h2 className={`text-[2rem] llg:text-[4rem] text-[#90ACE6] `}>
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
    </Hero>
  );
};

export default HomeHero;
