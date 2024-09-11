export default async function sitemap() {
  const routes = [
    "/",
    "/about",
    "/admin",
    "/calendar",
    "/faq",
    "/forms",
    "/meetOurStaff",
    "/payments",
    "/programs",
    "/registration",
    "/summerCamp",
    "/testimonials",
    "/programs/2-year-old-playgroup",
    "/programs/3-year-old-preschool",
    "/programs/4-5-s-pre-k",
    "/programs/kindergarten-enrichment",
  ];

  const url = "https://pumcpreschool.com";

  const allRoutes = routes.map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    priority: route === "/" ? 1 : 0.8,
  }));

  return allRoutes;
}
