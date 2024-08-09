import qs from "qs";

export const host = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function fetchStrapi(path, urlParamsObj, options) {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application-json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
      ...options,
    };
    //Build request url
    const queryString = qs.stringify(urlParamsObj);
    const requestUrl = `http://localhost:1337/api${path}${
      queryString ? `?${queryString}` : ""
    }`;

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

//export async function fetchStrapi(url) {
//  const res = await fetch(url, {
//    headers: {
//      "Content-Type": "application/json",
//      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
//    },
//  });

//  return res.json();
//}
