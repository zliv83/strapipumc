import WYSIWYG from "@/components/shared/WYSIWYG";

export default function SummerCampInfo({ summerCampInfo }) {
  const summerCampMap = summerCampInfo.map((info, i) => (
    <div key={i}>
      <h6 className="text-primary text-4xl text-center llg:text-left">
        {info.Title}
      </h6>
      <WYSIWYG content={info.Text} />
    </div>
  ));
  return <div className="self-center">{summerCampMap}</div>;
}
