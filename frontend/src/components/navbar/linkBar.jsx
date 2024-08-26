import { NavbarContent } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import DropDownMenu from "./DropDownMenu";

const LinkBar = () => {
  const links = [
    {
      label: "About Us",
      ariaLabel: "About Us drop down menu",
      items: [
        {
          label: "About Us",
          href: "/about",
          ariaLabel: "About Page",
        },
        {
          label: "Meet Our Staff",
          href: "/meetOurStaff",
          ariaLabel: "Meet our staff page",
        },
        {
          label: "Testimonials",
          href: "/testimonials",
          ariaLabel: "Testimonial Page",
        },
      ],
    },
    {
      label: "Programs",
      href: "/programs",
      ariaLabel: "PUMC's Programs page",
    },
    {
      label: "Enrollment",
      ariaLabel: "Enrollment drop down menu",
      items: [
        {
          label: "Registration",
          href: "/registration",
          ariaLabel: "Link to Registration Page",
        },
        {
          label: "Payments",
          href: "/payments",
          ariaLabel: "Link to Payments Page",
        },
      ],
    },
    {
      label: "Parent Resources",
      ariaLabel: "Parent Resources drop down menu",
      items: [
        {
          label: "Calendar",
          href: "/calendar",
          ariaLabel: "Link to Calendar Page",
        },
        {
          label: "Forms & Handbook",
          href: "/forms",
          ariaLabel: "Forms and handbook page",
        },
        {
          label: "Bulletin Board",
          href: "/bulletinBoard",
          ariaLabel: "Bulletin board page",
        },
        {
          label: "FAQs",
          href: "/faq",
          ariaLabel: "Frequently Asked Questions Page",
        },
      ],
    },
  ];

  const linksMap = links.map((link, i) =>
    link.items ? (
      <DropDownMenu
        key={`${link.label} ${i}`}
        label={link.label}
        items={link.items}
        ariaLabel={link.ariaLabel}
      />
    ) : (
      <Link
        key={`${link.label} ${i}`}
        href="/programs"
        aria-label="Link to the programs page"
      >
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]: bg-transparent text-xl"
          color="foreground"
          variant="light"
          radius="sm"
        >
          {link.label}
        </Button>
      </Link>
    )
  );
  return (
    <NavbarContent className="hidden llg:flex -ml-[12rem]" justify="center">
      {linksMap}
    </NavbarContent>
  );
};

export default LinkBar;
