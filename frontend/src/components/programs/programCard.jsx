"use client";
import { useRouter } from "next/navigation";

import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { StarIcon } from "hugeicons-react";

const ProgramCard = ({ img, alt, description, title, href, shadow }) => {
  const router = useRouter();

  const starListMap = description.map((item, i) => (
    <div
      key={i}
      id="star list row"
      className="flex flex-row gap-2 items-around"
    >
      <StarIcon color="#F17B20" />
      <span className="text-lg">{item}</span>
    </div>
  ));
  return (
    <Card
      id="Main Card"
      isPressable
      className="bg-[#F6F6F1]"
      onPress={() => router.push(href)}
      shadow={shadow}
    >
      <CardBody id="Card Body" className="grid grid-cols-2 llg:grid-cols-1 p-0">
        <Image
          alt={alt}
          src={img}
          className="rounded-r-none llg:rounded-b-none"
        />
        <div
          id="Text container"
          className="flex flex-col p-2 items-center justify-center gap-6 llg:p-12"
        >
          <span id="Card Title" className="text-2xl text-center">
            {title}
          </span>
          <div id="Star list" className="hidden flex-col gap-4 llg:flex">
            {starListMap}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProgramCard;
