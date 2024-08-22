import Link from "next/link";

const Links = ({ label, items, className, ariaLabel }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xl font-bold pb-2">{label}</span>
      {items.map((item, i) => (
        <Link key={i} href={item.href} aria-label={ariaLabel}>
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
          href: "/programs/2-year-old-playgroup",
          ariaLabel: "2 year old playgroup page",
        },
        {
          label: "3 y/o Preschool",
          href: "/programs/3-year-old-preschool",
          ariaLabel: "3 year old playgroup page",
        },
        {
          label: "4/5 y/o Pre-K",
          href: "/programs/4-5-s-pre-k",
          ariaLabel: "4 and 5 year olds Pre K page",
        },
        {
          label: "Kindergarten Enrichment",
          href: "/programs/kindergarten-enrichment",
          ariaLabel: "Kindergarten Enrichment page",
        },
        {
          label: "Summer Camp",
          href: "/summerCamp",
          ariaLabel: "Summer camp page",
        },
      ],
    },
    {
      label: "Registration",
      items: [
        {
          label: "Registration",
          href: "/registration",
          ariaLabel: "Registration Page",
        },
        {
          label: "Pay Online",
          href: "/payments",
          ariaLabel: "Payments Page",
        },
      ],
    },
    {
      label: "About Us",
      items: [
        {
          label: "About Us",
          href: "/about",
          ariaLabel: "About Us Page",
        },
        {
          label: "Meet Our Staff",
          href: "/meetOurStaff",
          ariaLabel: "Meet our staff Page",
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
        ariaLabel={link.ariaLabel}
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
