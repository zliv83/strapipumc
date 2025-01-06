import { getImageProps } from "next/image";
import WYSIWYG from "@/components/shared/WYSIWYG";

export default async function Staff({ staff }) {
  function getBackgroundImage(srcSet) {
    const imageSet = srcSet
      .split(", ")
      .map((str) => {
        const [url, dpi] = str.split(" ");
        return `url("${url}") ${dpi}`;
      })
      .join(", ");
    return `image-set(${imageSet})`;
  }
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

  const staffMap = staffArray.map((member, i) => {
    const {
      props: { srcSet },
    } = getImageProps({
      src: member.img,
      width: member.width,
      height: member.height,
      alt: member.alt,
    });

    const backgroundImage = getBackgroundImage(srcSet);

    return (
      <div key={i} className="grid llg:grid-cols-2 llg:px-24 gap-6 llg:gap-0">
        <div
          id="Image"
          style={{ backgroundImage }}
          className="h-96 w-96 llg:h-[32rem] llg:w-[32rem] bg-center bg-cover rounded-lg mx-auto llg:mx-0"
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
    );
  });

  return <div className="flex flex-col gap-16">{staffMap}</div>;
}
