import { fetchStrapi } from "./fetchStrapi";

export default async function pageData(
  endpoint,

  populateQuery = "deep"
) {
  const { data } = await fetchStrapi(endpoint, { populate: populateQuery });
  if (!data || !data.attributes) {
    return {
      attributes: {},
      metadata: {
        title: "Under Construction",
        description: "Content will be added soon - stay tuned.",
      },
      hasError: true,
    };
  }

  const attributes = data.attributes;

  const metadata = {
    title: attributes.meta?.metaTitle,
    description: attributes.meta?.metaDescription,
    robots: { index: true },
  };

  const { meta, ...restAttributes } = attributes;

  return { ...restAttributes, metadata, hasError: false };
}
