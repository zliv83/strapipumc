import { BlockH1 } from "@/components/shared/h1s";
import MyTable from "@/components/shared/myTable";

export default function FeeTables({ tables }) {
  const tablesMap = tables.map((item, i) => (
    <div key={i} className="flex flex-col gap-6">
      <h3 className="text-4xl text-center llg:text-left">
        {item.attributes.tables.title}
      </h3>
      <MyTable
        columns={item.attributes.tables.columns}
        rows={item.attributes.tables.rows}
        ariaLabel="This table breaks down the fees for tution at each age group"
      />
    </div>
  ));
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-5xl text-primary text-center llg:text-left pt-6 llg:pt-12">
        Tuition Schedule
      </h2>
      {tablesMap}
    </div>
  );
}
