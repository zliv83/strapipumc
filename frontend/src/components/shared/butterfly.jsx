import Image from "next/image";

export default function Butterfly({ className }) {
  <div className="hidden llg:flex absolute bottom-0 right-0 mr-48 mb-24">
    <Image
      src="https://helpful-positivity-9e5f57aa9a.media.strapiapp.com/Butterfly_151b660a14.svg"
      alt=""
      aria-hidden="true"
      height={300}
      width={300}
      className={`h-[300px] w-[300px] ${className}`}
    />
  </div>;
}
