import Image from "next/image";

const Hero = ({ img, alt, children, myHeight, className }) => {
  return (
    <section className={`relative w-full ${myHeight}`}>
      <Image
        src={img}
        alt={alt}
        fill
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
