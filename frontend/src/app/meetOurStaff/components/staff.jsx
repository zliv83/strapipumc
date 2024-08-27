import { Image } from "@nextui-org/image";
import { fetchStrapi } from "lib/fetchStrapi";
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

  const staffMap = staffArray.map((member, i) => {
    return (
      <div key={i} className="grid llg:grid-cols-2 llg:px-24 gap-6 llg:gap-0">
        <Image src={member.img} alt={member.alt} aria-label={member.alt} />
        <div className={`flex flex-col gap-2 justify-center `}>
          <h3 className="text-primary text-center llg:text-left text-4xl">
            {member.name}
          </h3>
          <h4 className="text-2xl text-center llg:text-left">
            {member.position}
          </h4>
          <WYSIWYG
            content={member.bio}
            pClassName="text-xl text-center llg:text-left"
          />
        </div>
      </div>
    );
  });

  return <div className="flex flex-col gap-16">{staffMap}</div>;
}
