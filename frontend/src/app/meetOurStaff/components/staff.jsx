import Image from "next/image";

import { fetchStrapi, host } from "lib/fetchStrapi";
import WYSIWYG from "@/components/shared/WYSIWYG";

export default async function Staff() {
  const { data } = await fetchStrapi("/staffs", { populate: "deep" });
  const staffArray = data[0].attributes.staff.map((staffMember) => {
    return {
      name: staffMember.name,
      position: staffMember.position,
      bio: staffMember.bio,
      img: staffMember.headshot.data.attributes.url,
      alt: staffMember.headshot.data.attributes.alternativeText,
      height: staffMember.headshot.data.attributes.height,
      width: staffMember.headshot.data.attributes.width,
    };
  });

  const staffMap = staffArray.map((member) => {
    return (
      <div className="grid grid-cols-1 llg:grid-cols-2">
        <Image
          src={`${host}${member.img}`}
          alt={member.alt}
          aira-label={member.alt}
          height={member.height}
          width={member.width}
          className="rounded-[.75rem]"
        />
        <div className="flex flex-col justify-center items-center p-4 gap-2">
          <h3 className="text-primary text-4xl llg:text-6xl text-center">
            {member.name}
          </h3>
          <h5 className="text-2xl llg:text-3xl llg:text-4xl text-center">
            {member.position}
          </h5>
          <WYSIWYG
            content={member.bio}
            pClassName="text-center llg:text-left text-2xl"
          />
        </div>
      </div>
    );
  });

  return staffMap;
}
