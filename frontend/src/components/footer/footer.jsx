"use client";

import Link from "next/link";
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
          className="flex flex-col llg:flex-row flex-col gap-6 justify-center items-center w-full p-8 llg:p-4"
        >
          <div className="flex flex-col items-center justify-center gap-2 llg:gap-0">
            {" "}
            <Link href="/" prefetch={false}>
              {" "}
              <Image
                src="/pumc-preschool-logo.svg"
                alt="Logo for Powell United Methodist Preschool in Powell, Ohio"
                width={2948}
                height={1292}
                className="llg:w-[18rem] llg:h-[12rem] sm:h-[6rem] sm:w-[10rem] "
              />{" "}
            </Link>{" "}
            <p className="text-center llg:text-left">
              {" "}
              825 E. Olentangy St. Powell, Ohio 43065 <br /> Phone: (614)
              847-3773 <br /> Director: Linda Franz <br /> Email:{" "}
              <a href="mailto:directorpumcpreschool@gmail.com">
                {" "}
                directorpumcpreschool@gmail.com{" "}
              </a>{" "}
              <br /> School Year Office Hours: Mon - Thurs 9:00am - 3:00pm{" "}
              <br /> Summer Office Hours: See Google Calendar{" "}
            </p>{" "}
          </div>
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
