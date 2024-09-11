import Link from "next/link";
import Block from "./Block";

export default function DownloadableCalendars({ calendars }) {
  const calendarMap = calendars.map((calendar, i) => (
    <Link
      key={i}
      className="text-4xl"
      href={calendar.attributes.url}
      aria-label={calendar.attributes.alternativeText}
      target="_blank"
    >
      {calendar.attributes.caption}
    </Link>
  ));
  return (
    <Block label="Downloadable Calendars">
      <div className="flex flex-col text-center llg:text-left gap-4 llg:pl-6">
        {calendarMap}
      </div>
    </Block>
  );
}
