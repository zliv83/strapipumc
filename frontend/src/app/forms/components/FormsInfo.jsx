import { Divider } from "@nextui-org/divider";

import { fetchStrapi } from "lib/fetchStrapi";
import WYSIWYG from "@/components/shared/WYSIWYG";

export default async function FormsInfo() {
  const {
    data: { attributes },
  } = await fetchStrapi("/form", { populate: "deep" });

  const formsInfoMap =
    attributes.form_information.data.attributes.FormsInfo.map((item, i) => (
      <section key={i} className="flex flex-col gap-2">
        <h2 className="text-primary text-center llg:text-left text-4xl">
          {item.Title}
        </h2>
        <WYSIWYG content={item.Text} />
      </section>
    ));

  return (
    <section>
      <h1 className="text-primary text-center text-4xl pt-6 llg:pt-0 llg:text-7xl">
        {attributes.Title}
      </h1>
      <Divider className="my-6 llg:my-12" />
      {formsInfoMap}
    </section>
  );
}
