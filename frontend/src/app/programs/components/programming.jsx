import Image from "next/image";

import { host } from "lib/fetchStrapi";

export default function Programming({ classProgramming }) {
  return (
    <div className="flex flex-row gap-8">
      <Image
        height={classProgramming.icon.data.attributes.height}
        alt={classProgramming.icon.data.attributes.alternativeText}
        width={classProgramming.icon.data.attributes.width}
        src={`${host}${classProgramming.icon.data.attributes.url}`}
        className="self-start"
      />
      <div>
        <span className="font-bold text-2xl">{`${classProgramming.title}:`}</span>{" "}
        <span className="text-2xl">{classProgramming.description}</span>
      </div>
    </div>
  );
}
