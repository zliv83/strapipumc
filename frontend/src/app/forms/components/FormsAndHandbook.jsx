import Link from "next/link";
import { Divider } from "@nextui-org/divider";

export default async function FormsAndHandbook({ form }) {
  const formMap = form.map((item, i) => {
    const link =
      item.FormPDF && item.FormPDF.data
        ? item.FormPDF.data.attributes.url
        : item.href;
    return item.href ? (
      <Link
        href={link ? link : "#"}
        target="_blank"
        key={i}
        aria-label={`Link to ${item.form}`}
        prefetch={false}
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
  });

  return formMap;
}
