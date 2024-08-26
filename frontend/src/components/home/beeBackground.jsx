import BlockContainer from "@/components/home/blockContainer";

import Image from "next/image";

const BeeBackground = ({ children, main, className, img }) => {
  return (
    <BlockContainer
      id="background"
      className={`flex flex-col gap-6 bg-PumcYellow relative ${
        main ? "bg-[center_top_1.5rem]" : "bg-[center_top_20.5rem]"
      } ${className}`}
    >
      <Image
        src={img}
        alt=""
        aria-hidden="true"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="-z-1"
      />
      {children}
    </BlockContainer>
  );
};

export default BeeBackground;
