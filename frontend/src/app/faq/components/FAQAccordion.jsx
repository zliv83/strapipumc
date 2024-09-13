"use client";
import Image from "next/image";
import Link from "next/link";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import WYSIWYG from "@/components/shared/WYSIWYG";
import MyTable from "@/components/shared/myTable";

export default function FAQAccorion({ faqs }) {
  const faqMap = faqs.map((faq, i) => {
    if (!faq) return null;
    return (
      <AccordionItem
        key={i}
        title={
          <p className="text-3xl llg:text-4xl text-primary">{faq.Question}</p>
        }
        textValue={faq.Question}
      >
        <WYSIWYG content={faq.Answer} pClassName="text-2xl" />
        {faq.my_table &&
        faq.my_table?.data?.attributes?.tables?.columns &&
        faq.my_table?.data?.attributes?.tables?.rows ? (
          <MyTable
            columns={faq.my_table.data.attributes.tables.columns}
            rows={faq.my_table.data.attributes.tables.rows}
            ariaLabel="Delay table listing hours in the event of a school delay"
            className="pb-6"
          />
        ) : null}
        {faq.image?.data?.attributes?.url &&
        faq.alt &&
        faq.image?.data?.attributes?.width &&
        faq.image?.data?.attributes?.height ? (
          <div className="flex flex-row justify-center items-center gap-4">
            <Link
              href={`${faq.ImageLink ? faq.ImageLink : "#"}`}
              aria-label={faq.image.data.attributes.alternativeText}
              target="_blank"
              prefetch={false}
            >
              <Image
                src={faq.image.data.attributes.url}
                alt={faq.alt}
                width={faq.image.data.attributes.width}
                height={faq.image.data.attributes.height}
                aria-label={faq.alt}
                loading="lazy"
              />
            </Link>
            {faq.RemindText ? (
              <p className="text-3xl">{faq.RemindText}</p>
            ) : null}
          </div>
        ) : null}
      </AccordionItem>
    );
  });
  return (
    <div className="p-6">
      <Accordion>{faqMap}</Accordion>
    </div>
  );
}
