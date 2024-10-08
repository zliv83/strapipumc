import BlockContainer from "@/components/home/blockContainer";

import Image from "next/image";

const BeeBackground = ({ children, className }) => {
  return (
    <BlockContainer
      id="background"
      className={`flex flex-col gap-6 bg-PumcYellow relative  ${className}`}
    >
      <Image
        src="/Bee.svg"
        alt=""
        aria-hidden="true"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="-z-1 object-[40%_0%] llg:object-[100%_0%] "
      />
      {children}
    </BlockContainer>
  );
};

export default BeeBackground;
