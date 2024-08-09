"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";

export default function MyTable({ rows, columns, ariaLabel, className }) {
  return (
    <div className={className}>
      <Table isStriped aria-label={ariaLabel}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              className="text-2xl text-center text-wrap"
              key={column.key}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell className="text-xl text-center">
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
