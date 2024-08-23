import { Divider } from "@nextui-org/divider";

import WYSIWYG from "@/components/shared/WYSIWYG";

export default async function FormsInfo({ title, formInfo }) {
  const formsInfoMap = formInfo.map((item, i) => (
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
        {title}
      </h1>
      <Divider className="my-6 llg:my-12" />
      {formsInfoMap}
    </section>
  );
}
