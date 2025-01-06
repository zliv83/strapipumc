import { fetchStrapi } from "lib/fetchStrapi";

export async function fetchRegistrationData(yearType) {
  const [response1, response2] = await Promise.all([
    fetchStrapi("/registration", { populate: "deep, 5" }),
    fetchStrapi("/registration-2", { populate: "deep, 5" }),
  ]);

  const {
    data: { attributes: attributes1, error: error1 },
  } = response1;

  const {
    data: { attributes: attributes2, error: error2 },
  } = response2;

  if (error1 || error2) {
    throw new Error("Failed to fetch registration data");
  }

  const isCurrentYear1 =
    yearType === "currentYear" ? attributes1.currentYear : attributes1.nextYear;
  const isCurrentYear2 =
    yearType === "currentYear" ? attributes2.currentYear : attributes2.nextYear;

  if (isCurrentYear1) {
    return attributes1;
  } else if (isCurrentYear2) {
    return attributes2;
  } else {
    throw new Error(`No data found for ${yearType}`);
  }
}
