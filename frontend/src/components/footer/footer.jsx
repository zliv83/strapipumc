"use client";

import Image from "next/image";
import { Divider } from "@nextui-org/divider";

import FooterLinks from "@/components/footer/footerLinks";
import Copyright from "@/components/footer/copyright";
import Socials from "@/components/footer/socials";
import MyButton from "@/components/shared/myButton";

const footer = () => {
  return (
    <>
      <footer className="p-12">
        <div
          id="footer grid"
          className="flex flex-col gap-12 pt-6 pb-16 llg:pt-0 llg:pb-0 llg:gap-0 llg:grid llg:grid-cols-[45%_35%_20%] items-center justify-items-end"
        >
          <Image
            src="/logo.svg"
            alt="PUMC Logo"
            width={2948}
            height={1292}
            className="llg:w-[18rem] llg:h-[12rem] sm:h-[6rem] sm:w-[10rem] place-self-start"
          />
          <FooterLinks className="hidden llg:flex" />
          <Socials className="llg:hidden" />
          <MyButton
            label="Register"
            href="/registration"
            size="lg"
            ariaLabel="Link to the registration pages"
          />
        </div>
        <Divider />
        <div className="flex flex-col llg:flex-row justify-between items-center w-full pt-16">
          <FooterLinks className="llg:hidden" />
          <Copyright className="mt-16 llg:mt-0" />
          <Socials className="hidden llg:flex" />
        </div>
      </footer>
    </>
  );
};

export default footer;
