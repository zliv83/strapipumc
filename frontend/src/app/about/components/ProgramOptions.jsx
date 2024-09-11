import WYSIWYG from "@/components/shared/WYSIWYG";
import Title from './Title'

export default function ProgramOptions({programText, programOptions}) {
    return (
        <section aria-label="Program Options Section">
        <Title>{programText}</Title>
        <WYSIWYG
          content={programOptions}
          pClassName="text-2xl"
        />
      </section>
    )
}