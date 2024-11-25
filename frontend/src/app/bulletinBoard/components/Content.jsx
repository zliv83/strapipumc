import Link from "next/link";
import Image from "next/image";

export default function Content({ content }) {
  const contentMap = content.map((item, i) => {
    return (
      <div
        key={i}
        className="flex flex-col gap-6 justify-center items-center text-center llg:text-left llg:items-start px-6 llg:px-0"
      >
        {item.Title ? (
          <h2 className="text-primary text-4xl pb-6">{item.Title}</h2>
        ) : null}
        {item.description ? (
          <h3 className="text-2xl">{item.description}</h3>
        ) : null}
        <div className="grid grid-cols-1 llg:grid-cols-2 gap-6 pb-6">
          {item.Pictures?.data
            ? item.Pictures.data.map((img, j) => {
                return (
                  <Link
                    key={j}
                    href={img.attributes.url}
                    target="_blank"
                    prefetch={false}
                  >
                    <Image
                      src={img.attributes.url}
                      alt={
                        img.attributes.alternativeText || "User uploaded photo"
                      }
                      width={img.attributes.width}
                      height={img.attributes.height}
                      aria-label={
                        img.attributes.alternativeText ||
                        "This photo was uploaded by a user"
                      }
                      loading="lazy"
                    />
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    );
  });

  return (
    <>
      {content ? (
        contentMap
      ) : (
        <h3 className="text-primary text-6xl text-center">
          Check back later for the most recent updates
        </h3>
      )}
    </>
  );
}
