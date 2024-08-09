import MyButton from "@/components/shared/myButton";

export default function Description({ programDescription }) {
  return (
    <div id="description" className="flex flex-col p-8 llg:p-20 gap-12">
      <h2 className="text-center llg:text-left text-3xl">
        {programDescription}
      </h2>
      <MyButton
        className="self-center llg:self-end"
        label="Tuition Info"
        size="lg"
        href="#"
      />
    </div>
  );
}
