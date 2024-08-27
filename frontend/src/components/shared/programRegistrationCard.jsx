"use client";
import { useRouter } from "next/navigation";
import { Card, CardBody } from "@nextui-org/card";

import Image from "next/image";

export default function ProgramRegistrationCard({
  href,
  shadow,
  alt,
  img,
  title,
  children,
  height,
  width,
  cardHeight,
  titleColor,
  ariaLabel,
}) {
  const router = useRouter();
  return (
    <Card
      id="Main Card"
      isPressable
      className={`bg-background ${cardHeight}`}
      onPress={() => router.push(href)}
      aria-label={ariaLabel}
      shadow={shadow}
    >
      <CardBody
        id="Card Body"
        className="grid grid-cols-2 llg:grid-cols-1 p-0 llg:grid-rows-[1fr_1fr]"
      >
        <Image
          alt={alt}
          src={img}
          aria-label={alt}
          className="rounded-r-none llg:rounded-b-none llg:h-[75%]"
          height={height}
          width={width}
        />
        <div
          id="Text container"
          className="flex flex-col p-2 items-center justify-center llg:p-6 llg:-mt-12"
        >
          <span
            id="Card Title"
            className={`text-center text-xl llg:text-4xl llg:pb-6 ${titleColor}`}
          >
            {title}
          </span>
          {children}
        </div>
      </CardBody>
    </Card>
  );
}
