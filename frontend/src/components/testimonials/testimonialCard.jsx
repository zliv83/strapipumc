import { Card, CardBody } from "@nextui-org/card";
import { QuoteUpIcon, StarIcon } from "hugeicons-react";

const TestimonialCard = ({ author, quote, numStars = 5 }) => {
  const stars = Array.from({ length: numStars }, (_, i) => (
    <StarIcon key={i} size={32} color="#FFC904" />
  ));
  return (
    <Card className="bg-background z-10">
      <CardBody className="flex flex-col llg:gap-2">
        <QuoteUpIcon className="h-[71px] w-[71px]" />
        <div className="flex-grow llg:p-16">
          <p className="text-lg llg:text-2xl">{quote}</p>
        </div>
        <div
          id="stars and name row"
          className="flex flex-col gap-4 mt-4 llg:mt-0 llg:gap-0 llg:flex-row llg:justify-between"
        >
          <div id="stars row" className="flex flex-row">
            {stars}
          </div>
          <p className="text-lg llg:text-2xl">{author}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default TestimonialCard;
