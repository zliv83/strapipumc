"use client";

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
import { Link } from "@nextui-org/link";
import PUMCLogo from "@/components/shared/logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Programs",
      path: "/programs",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Meet Our Staff",
      path: "/meetOurStaff",
    },
    {
      label: "Testimonials",
      path: "/testimonials",
    },
    {
      label: "Registration",
      path: "/registration",
    },
    {
      label: "Payments",
      path: "/payments",
    },
    {
      label: "Forms & Handbook",
      path: "/formsAndHandbook",
    },
    {
      label: "Calendar",
      path: "/calendar",
    },
    {
      label: "Bulletin Board",
      path: "/bulletinBoard",
    },
    {
      label: "FAQs",
      path: "/faqs",
    },
  ];

  return (
    <NextUINavbar
      className="py-2 llg:py-12 llg:px-6  "
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="llg:hidden z-10"
        />
        <NavbarBrand id="fart">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <PUMCLogo className="llg:w-[18rem] llg:h-[12rem] sm: h-[6rem] sm: w-[10rem]" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <LinkBar />
      <NavbarContent justify="end">
        <NavbarItem>
          <MyButton label="Register" href="/registration" size="both" />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-24">
        {menuItems.map((menuItem, i) => (
          <NavbarMenuItem key={`${menuItem.label}-${i}`}>
            <Link
              href={menuItem.path}
              color={menuItem.path === path ? "primary" : "foreground"}
              onClick={() => setIsMenuOpen(false)}
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
