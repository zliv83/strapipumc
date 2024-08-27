import { fetchStrapi } from "lib/fetchStrapi";
import { Card, CardBody } from "@nextui-org/card";
import { QuoteUpIcon } from "hugeicons-react";
import MyStarIcon from "@/components/shared/starIcon";
import WYSIWYG from "./WYSIWYG";

export default async function Testimonials({ top }) {
  const { data } = await fetchStrapi("/testimonials", {
    populate: "deep",
  });

  const allTestimonials = data[0].attributes.testimonial;
  const topTestimonials = allTestimonials.slice(0, 2);

  const testimonialsArray = top ? topTestimonials : allTestimonials;

  const stars = Array.from({ length: 5 }, (_, i) => (
    <MyStarIcon key={i} color="#FFC904" />
  ));

  const testimonialMap = testimonialsArray.map((item, i) => (
    <Card key={i} className="bg-background z-30">
      <CardBody className="flex flex-col llg:gap-2 p-4">
        <QuoteUpIcon color="#F17B20" className="h-[4.5rem] w-[4.5rem]" />
        <div className="flex-grow llg:p-6">
          <WYSIWYG content={item.quote} pClassName="text-2xl" />
        </div>
        <div
          id="stars and name row"
          className="flex flex-col gap-4 mt-4 llg:mt-0 llg:gap-0 llg:flex-row llg:justify-between items-center"
        >
          <div id="stars row" className="flex flex-row">
            {stars}
          </div>
          <p className="text-lg llg:text-2xl">{item.author}</p>
        </div>
      </CardBody>
    </Card>
  ));

  return (
    <div className="grid gap-8 llg:grid-cols-2 llg:gap-28">
      {testimonialMap}
    </div>
  );
}
