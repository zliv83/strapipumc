import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center gap-8">
      <Image
        src="/notFound.svg"
        alt="image of a 404 error in text"
        aria-label="Image of a 404 error in text"
        width={860}
        height={571}
      />
      <h2 className="text-6xl">
        Page Not Found - Click{" "}
        <Link href="/" className="text-[#0000EE]">
          Here
        </Link>{" "}
        to Return Home
      </h2>
    </div>
  );
}
