import MyTable from "@/components/shared/myTable";
import Title from './Title'

export default function ProgramTable({title, columns, rows}) {
    return (
        <section aria-label="Student/Teacher Ratio Table Section">
        <Title className="text-center text-4xl llg:text-left mb-6">
          {title}
        </Title>
        <MyTable
          columns={columns}
          rows={rows}
          ariaLabel="PUMC vs State Teacher to Student Ratios"
          className="pt-6"
        />
      </section>
    )
}