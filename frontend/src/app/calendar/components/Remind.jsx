import Image from "next/image";
import Block from "./Block";

export default function Remind({ src, alt }) {
  return (
    <Block label="Delays and Cancellations">
      <div className="flex justify-center items-center llg:items-start llg:justify-start">
        <div className="flex flex-row gap-4 items-center llg:pl-6">
          <Image src={src} alt={alt} height={48} width={48} loading="lazy" />
          <h3 className="text-xl llg:text-4xl">
            Will be texted through REMIND
          </h3>
        </div>
      </div>
    </Block>
  );
}
