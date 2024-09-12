"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function WYSIWYG({
  content,
  pClassName,
  liClassName,
  linkAriaLabel,
}) {
  return (
    <div className="p-6">
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => (
            <p
              //className={`text-center text-xl ${pMobile} llg:text-left llg:text-3xl ${pDesktop}`}
              className={pClassName}
            >
              {children}
            </p>
          ),
          list: ({ children, format }) => {
            if (format === "ordered") {
              return <ol className="list-decimal">{children}</ol>;
            } else if (format === "unordered") {
              return <ul className="list-disc">{children}</ul>;
            }
          },
          "list-item": ({ children }) => (
            <li className={`text-2xl llg:ml-8 pb-2 ${liClassName}`}>
              {children}
            </li>
          ),
          link: ({ children, url }) => (
            <Link
              href={url}
              className="text-[#0000EE]"
              aria-label={linkAriaLabel}
              prefetch={false}
            >
              {children}
            </Link>
          ),
        }}
      />
    </div>
  );
}
