"use client";
import Link from "next/link";
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
import PUMCLogo from "@/components/shared/logo";

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
      path: "/faqs",
      ariaLabel: "Frequently Asked Questions Page",
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
          <Link
            href="/"
            aria-label="Link to Home Page"
            onClick={() => setIsMenuOpen(false)}
          >
            <PUMCLogo className="llg:w-[18rem] llg:h-[12rem] sm: h-[6rem] sm: w-[10rem]" />
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
              color={menuItem.path === path ? "primary" : "foreground"}
              onClick={() => setIsMenuOpen(false)}
              aria-label={menuItem.ariaLabel}
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
