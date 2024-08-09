import Image from "next/image";
import { host } from "lib/fetchStrapi";

const Hero = ({ img, alt, children, size, objectPosition = "" }) => {
  let height;

  switch (size) {
    case "main":
      height = "h-[40rem] llg:h-[65rem]";
      break;
    case "about":
      height = "h-[10rem] llg:h-[30rem]";
      break;
    case "programs":
      height = "h-[20rem] llg:h-[48rem]";
      break;
    default:
      height = "h-[10rem] llg:h-[20rem]";
  }

  return (
    <div className={`relative w-full ${height}`}>
      <Image
        src={`${host}${img}`}
        alt={alt}
        fill
        className="object-cover"
        objectPosition={objectPosition}
        priority
      />
      <div className="z-10 absolute inset-0 flex flex-col justify-center text-center text-background">
        {children}
      </div>
    </div>
  );
};

export default Hero;
