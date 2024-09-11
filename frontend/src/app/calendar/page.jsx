import dynamic from "next/dynamic";

import { fetchStrapi } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import Block from "./components/Block";
const CalendarTable = dynamic(() => import("./components/CalendarTable"));
const Remind = dynamic(() => import("./components/Remind"));
const DownloadableCalendars = dynamic(() =>
  import("./components/DownloadableCalendars")
);

const {
  data: { attributes },
} = await fetchStrapi("/calendar", { populate: "deep, 5" });

export const metadata = {
  title: attributes.meta.metaTitle,
  description: attributes.meta.metaDescription,
  robots: {
    index: true,
  },
};

export default function Calendar() {
  const image = attributes.HeroImg.data.attributes;
  const delayTable = attributes.my_table.data.attributes.tables;
  const remindIcon = attributes.RemindIcon.data.attributes;

  return (
    <>
      <Hero
        img={image.url}
        alt={image.alternativeText}
        height={image.height}
        width={image.width}
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
          <DownloadableCalendars
            calendars={attributes.DownloadableCalendars.data}
          />
          <CalendarTable columns={delayTable.columns} rows={delayTable.rows} />
          <Remind src={remindIcon.url} alt={remindIcon.alternativeText} />
        </div>
      </PageView>
    </>
  );
}
