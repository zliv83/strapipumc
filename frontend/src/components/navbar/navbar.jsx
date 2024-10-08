"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import LinkBar from "@/components/navbar/linkBar";
import MyButton from "@/components/shared/myButton";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const menuItems = [
    {
      label: "Home",
      path: "/",
      ariaLabel: "Home Page",
    },
    {
      label: "Programs",
      path: "/programs",
      ariaLabel: "PUMC Programs Page",
    },
    {
      label: "About Us",
      path: "/about",
      ariaLabel: "About Us Page",
    },
    {
      label: "Meet Our Staff",
      path: "/meetOurStaff",
      ariaLabel: "Meet our staff page",
    },
    {
      label: "Testimonials",
      path: "/testimonials",
      ariaLabel: "Testimonials page",
    },
    {
      label: "Registration",
      path: "/registration",
      ariaLabel: "Registration Page",
    },
    {
      label: "Payments",
      path: "/payments",
      ariaLabel: "Payments page",
    },
    {
      label: "Forms & Handbook",
      path: "/forms",
      ariaLabel: "Forms and handbook page",
    },
    {
      label: "Calendar",
      path: "/calendar",
      ariaLabel: "Calendar Page",
    },
    {
      label: "Bulletin Board",
      path: "/bulletinBoard",
      ariaLabel: "Bulletin Board Page",
    },
    {
      label: "FAQs",
      path: "/faq",
      ariaLabel: "Frequently Asked Questions Page",
    },
  ];

  return (
    <NextUINavbar
      className="py-2 llg:py-6 llg:px-6  "
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="llg:hidden z-10"
        />
        <NavbarBrand>
          <Link
            href="/"
            aria-label="Home Page"
            onClick={() => setIsMenuOpen(false)}
            prefetch={false}
          >
            <Image
              src="/pumc-preschool-logo.svg"
              alt="Logo for Powell United Methodist Preschool in Powell, Ohio"
              width={2948}
              height={1292}
              className="llg:w-[15rem] llg:h-[6rem] sm: h-[6rem] sm: w-[10rem]"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <LinkBar />
      <NavbarContent justify="end">
        <NavbarItem>
          <MyButton
            label="Register"
            href="/registration"
            size="both"
            ariaLabel="Link to the Registration page"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-24">
        {menuItems.map((menuItem, i) => (
          <NavbarMenuItem key={`${menuItem.label}-${i}`}>
            <Link
              href={menuItem.path}
              className={
                menuItem.path === path ? "text-primary" : "text-foreground"
              }
              onClick={() => setIsMenuOpen(false)}
              aria-label={menuItem.ariaLabel}
              prefetch={false}
            >
              {menuItem.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
