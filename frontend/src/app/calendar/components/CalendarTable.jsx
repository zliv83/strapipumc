import MyTable from "@/components/shared/myTable";
import Block from "./Block";

export default function CalendarTable({ columns, rows }) {
  return (
    <Block label="Delay Hours">
      <MyTable
        columns={columns}
        rows={rows}
        ariaLabel="Delay table listing hours in the event of a school delay"
        className="llg:pl-6"
      />
    </Block>
  );
}
