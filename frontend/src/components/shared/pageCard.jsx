import { Card, CardBody } from "@nextui-org/card";

const PageCard = ({ children, className }) => {
  return (
    <Card className="w-full bg-background">
      <CardBody className={`p-4 llg:p-12 ${className}`}>{children}</CardBody>
    </Card>
  );
};

export default PageCard;
