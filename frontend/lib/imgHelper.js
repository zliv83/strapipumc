export default function imgHelper(title) {
  const imageFileName = title
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
  const imageUrl = `/${imageFileName}.webp`;

  let alternativeText;
  switch (title) {
    case "2 Year Old Playgroup":
      alternativeText = "Child playing with a toy";
      break;
    case "3 Year Old Preschool":
      alternativeText = "Child playing with blocksl";
      break;
    case "4/5's Pre-K":
      alternativeText = "Child Picking out a book";
      break;
    case "Kindergarten Enrichment":
      alternativeText =
        "Childrens hands with one letter on each spelling testimonials";
      break;
    default:
      alternativeText = `Image for ${title}`;
  }

  return { image: imageUrl, alternativeText };
}
