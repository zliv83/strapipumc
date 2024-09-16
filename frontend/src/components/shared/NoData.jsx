import Image from "next/image";

export default function NoData() {
  const alt = "Under construction illustration";
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Image
        src="/noData.svg"
        alt={alt}
        aria-label={alt}
        height={725}
        width={1178}
      />
      <h1 className="text-4xl text-center">
        Oops! Looks like we're still gathering information for this page.
        <br />
        Please check back soon for updates!
      </h1>
    </div>
  );
}
