import Link from "next/link";
import Image from "next/image";

import { fetchStrapi, host } from "lib/fetchStrapi";
import Hero from "@/components/shared/hero";
import PageView from "@/components/shared/pageView";
import MyTable from "@/components/shared/myTable";

const route = "/calendar";

export async function generateMetadata() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep" });
  return {
    title: attributes.meta.metaTitle,
    description: attributes.meta.metaDescription,
    robots: {
      index: true,
    },
  };
}

export default async function Calendar() {
  const {
    data: { attributes },
  } = await fetchStrapi(route, { populate: "deep, 5" });
  const image = attributes.HeroImg.data.attributes;
  const delayTable = attributes.my_table.data.attributes.tables;
  const remindIcon = attributes.RemindIcon.data.attributes;

  const calendarMap = attributes.DownloadableCalendars.data.map(
    (calendar, i) => (
      <Link
        key={i}
        className="text-4xl"
        href={calendar.attributes.url}
        aria-label={calendar.attributes.alternativeText}
        target="_blank"
      >
        {calendar.attributes.caption}
      </Link>
    )
  );

  const Remind = () => (
    <div className="flex flex-row gap-4 items-center llg:pl-6">
      <Image
        src={remindIcon.url}
        alt={remindIcon.alternativeText}
        height={48}
        width={48}
      />
      <h3 className="text-xl llg:text-4xl">Will be texted through REMIND</h3>
    </div>
  );

  const Block = ({ label, children }) => (
    <section className="flex flex-col gap-4">
      <h2 className="text-primary text-4xl text-center llg:text-left llg:text-6xl pb-4">
        {label}
      </h2>
      {children}
    </section>
  );

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
          <Block label="Downloadable Calendars">
            <div className="flex flex-col text-center llg:text-left gap-4 llg:pl-6">
              {calendarMap}
            </div>
          </Block>
          <Block label="Delay Hours">
            <MyTable
              columns={delayTable.columns}
              rows={delayTable.rows}
              ariaLabel="Delay table listing hours in the event of a school delay"
              className="llg:pl-6"
            />
          </Block>
          <Block label="Delays and Cancellations">
            <div className="flex justify-center items-center llg:items-start llg:justify-start">
              <Remind />
            </div>
          </Block>
        </div>
      </PageView>
    </>
  );
}
