import WYSIWYG from "@/components/shared/WYSIWYG";

export default async function FormsInfo({ formInfo }) {
  const formsInfoMap = formInfo.map((item, i) => (
    <section key={i} className="flex flex-col gap-2">
      <h2 className="text-primary text-center llg:text-left text-4xl">
        {item.Title}
      </h2>
      <WYSIWYG content={item.Text} />
    </section>
  ));

  return formsInfoMap;
}
