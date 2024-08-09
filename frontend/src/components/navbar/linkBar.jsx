import { NavbarContent } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import DropDownMenu from "./DropDownMenu";

const LinkBar = () => {
  const links = [
    {
      label: "About Us",
      items: [
        {
          label: "About Us",
          href: "/about",
        },
        {
          label: "Meet Our Staff",
          href: "/meetOurStaff",
        },
      ],
    },
    {
      label: "Programs",
      href: "/programs",
    },
    {
      label: "Enrollment",
      items: [
        {
          label: "Registration",
          href: "/registration",
        },
        {
          label: "Payments",
          href: "/payments",
        },
      ],
    },
    {
      label: "Parent Resources",
      items: [
        {
          label: "Calendar",
          href: "/calendar",
        },
        {
          label: "Forms & Handbook",
          href: "/formsAndHandbook",
        },
        {
          label: "Bulletin Board",
          href: " /bulletinBoard",
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
      />
    ) : (
      <Link key={`${link.label} ${i}`} href="/programs">
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
