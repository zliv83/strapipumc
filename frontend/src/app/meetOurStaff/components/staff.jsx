import { Image } from "@nextui-org/image";
import WYSIWYG from "@/components/shared/WYSIWYG";

export default async function Staff({ staff }) {
  const staffArray = staff.map(
    ({
      name,
      position,
      bio,
      headshot: {
        data: {
          attributes: { url: img, alternativeText: alt, height, width },
        },
      },
    }) => ({
      name,
      position,
      bio,
      img,
      alt,
      height,
      width,
    })
  );

  const staffMap = staffArray.map((member, i) => (
    <div key={i} className="grid llg:grid-cols-2 llg:px-24 gap-6 llg:gap-0">
      <Image
        src={member.img}
        alt={member.alt}
        aria-label={member.alt}
        loading="lazy"
      />
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="text-primary text-4xl text-center llg:text-left">
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
  ));

  return <div className="flex flex-col gap-16">{staffMap}</div>;
}
