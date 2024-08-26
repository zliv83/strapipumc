import Image from "next/image";

const Hero = ({ img, alt, height, width, children, myHeight, className }) => {
  return (
    <section className={`relative w-full ${myHeight}`}>
      <Image
        src={img}
        alt={alt}
        height={height}
        width={width}
        className={`object-cover ${className}`}
        aria-label={alt}
        priority
        placeholder="blur"
        blurDataURL={img}
      />

      <div className="z-10 absolute inset-0 flex flex-col justify-center text-center text-background">
        {children}
      </div>
    </section>
  );
};

export default Hero;
