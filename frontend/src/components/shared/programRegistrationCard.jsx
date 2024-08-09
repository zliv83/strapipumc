"use client";
import { useRouter } from "next/navigation";
import { Card, CardBody } from "@nextui-org/card";

import { host } from "lib/fetchStrapi";
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
}) {
  const router = useRouter();
  return (
    <Card
      id="Main Card"
      isPressable
      className={`bg-background ${cardHeight}`}
      onPress={() => router.push(href)}
      shadow={shadow}
    >
      <CardBody id="Card Body" className="grid grid-cols-2 llg:grid-cols-1 p-0">
        <Image
          alt={alt}
          src={`${host}${img}`}
          className="rounded-r-none llg:rounded-b-none"
          style={{
            height: "100%",
          }}
          height={height}
          width={width}
        />
        <div
          id="Text container"
          className="flex flex-col p-2 items-center justify-center llg:gap-6 llg:p-12"
        >
          <span
            id="Card Title"
            className="text-primary text-center text-xl llg:text-3xl"
          >
            {title}
          </span>
          {children}
        </div>
      </CardBody>
    </Card>
  );
}
