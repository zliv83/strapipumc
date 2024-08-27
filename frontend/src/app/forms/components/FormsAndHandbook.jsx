import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Card } from "@nextui-org/card";
import { BlockH1 } from "@/components/shared/h1s";

export default async function FormsAndHandbook({ title, form }) {
  return (
    <>
      <BlockH1 className="pb-6 text-primary">{title}</BlockH1>
      <Card className="p-8">
        {form.map((item, i) => {
          const link =
            item.FormPDF && item.FormPDF.data
              ? item.FormPDF.data.attributes.url
              : item.href;
          return item.href ? (
            <Link
              href={link ? link : "#"}
              key={i}
              aria-label={`Link to ${item.form}`}
            >
              <div className="w-full">
                <h3 className="text-3xl text-primary py-4">{item.form}</h3>
                <p className="pb-4 text-xl text-PumcBlue">{item.description}</p>
                <Divider />
              </div>
            </Link>
          ) : (
            <div key={i} className="w-full">
              <h3 className="text-3xl text-primary py-4">{item.form}</h3>
              <p className="pb-4 text-xl text-PumcBlue">{item.description}</p>
              <Divider />
            </div>
          );
        })}
      </Card>
    </>
  );
}
