import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import Block from "./components/Block";
import NoData from "@/components/shared/NoData";
import CalendarTable from "./components/CalendarTable";
import Remind from "./components/Remind";
import DownloadableCalendarsCompnent from "./components/DownloadableCalendars";

export const dynamic = "force-dynamic";

const {
  data: {
    attributes: { meta },
  },
} = await fetchStrapi("/calendar", { populate: "deep, 5" });

export const metadata = {
  title: meta?.metaTitle,
  description: meta?.metaDescription,
  robots: { index: true },
};

export default async function Calendar() {
  const {
    data: {
      attributes: { RemindIcon, DownloadableCalendars, my_table },
      error,
    },
  } = await fetchStrapi("/calendar", { populate: "deep, 5" });
  if (error) {
    return <NoData />;
  }
  const table = my_table?.data?.attributes?.tables;
  const icon = RemindIcon?.data?.attributes;
  return (
    <>
      <Hero
        img="/calendars.webp"
        alt="Standup page calendar"
        myHeight="h-[15rem] llg:h-[30rem] "
      >
        <h1 className="text-PumcBlue text-6xl llg:text-9xl llg:self-start llg:ml-20">
          Calendars
        </h1>
      </Hero>
      <PageView>
        <div className="flex flex-col gap-12">
          <Block label="Upcoming Events">
            <iframe
              src="https://embed.styledcalendar.com/#PgQb4V3jH6JtBUwgaemr"
              title="Styled Calendar"
              className="w-full border-none min-h-[30rem] llg:min-h-[45rem]"
              data-cy="calendar-embed-iframe"
            ></iframe>
            <script
              async
              type="module"
              src="https://embed.styledcalendar.com/assets/parent-window.js"
            ></script>
          </Block>
          <DownloadableCalendarsCompnent
            calendars={DownloadableCalendars.data}
          />
          {my_table?.data === null ? null : (
            <CalendarTable columns={table?.columns} rows={table?.rows} />
          )}
          {RemindIcon ? (
            <Remind src={icon?.url} alt={icon?.alternativeText} />
          ) : null}
        </div>
      </PageView>
    </>
  );
}
