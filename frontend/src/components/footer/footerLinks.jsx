import Link from "next/link";

const Links = ({ label, items, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xl font-bold pb-2">{label}</span>
      {items.map((item, i) => (
        <Link key={i} href={item.href}>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

const FooterLinks = ({ className }) => {
  const linkItems = [
    {
      label: "Programs",
      items: [
        {
          label: "2 y/o Playgroup",
          href: "#",
        },
        {
          label: "3 y/o Preschool",
          href: "#",
        },
        {
          label: "4/5 y/o Pre-K",
          href: "#",
        },
        {
          label: "Kindergarten Enrichment",
          href: "#",
        },
      ],
    },
    {
      label: "Registration",
      items: [
        {
          label: "Online Registration",
          href: "/registration",
        },
        {
          label: "Pay Online",
          href: "/payments",
        },
      ],
    },
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
  ];
  const linkMap = linkItems.map((link, i) => {
    return (
      <Links
        key={i}
        label={link.label}
        items={link.items}
        className={i === 1 ? "llg:mr-8" : ""}
      />
    );
  });
  return (
    <div
      className={`flex flex-col gap-6 text-center llg:text-left llg:flex-row ${className}`}
    >
      {linkMap}
    </div>
  );
};

export default FooterLinks;
