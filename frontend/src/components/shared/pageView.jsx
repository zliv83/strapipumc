import { Card, CardBody } from "@nextui-org/card";
export default function PageView({ children, className }) {
  return (
    <div className={`p-0 llg:p-6 bg-background ${className}`}>
      <Card className="bg-background llg:p-6 rounded-none llg:rounded-xl">
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  );
}
