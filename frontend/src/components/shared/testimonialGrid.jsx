import TestimonialCard from "@/components/testimonials/testimonials";
import { fetchStrapi } from "lib/fetchStrapi";

export default async function TestimonialGrid({ top }) {
  const topTestimonialsData = await fetchStrapi("/top-testimonials", {
    populate: "*",
  });

  let allTestimonialsData;
  if (!top) {
    allTestimonialsData = await fetchStrapi("/testimonials", {
      populate: "*",
    });
  }

  const testimonials = top
    ? topTestimonialsData.data
    : [...topTestimonialsData.data, ...allTestimonialsData.data];

  const testimonialArray = testimonials.flatMap((testimonialItem) => {
    return testimonialItem.attributes.testimonial.map((testimonial) => ({
      author: testimonial.author,
      quote: testimonial.quote[0].children[0].text,
    }));
  });

  return (
    <div id="card grid" className="grid gap-8 llg:grid-cols-2 llg:gap-28">
      {testimonialArray.map((testimonial, i) => (
        <TestimonialCard
          key={i}
          quote={testimonial.quote}
          author={testimonial.author}
        />
      ))}
    </div>
  );
}
