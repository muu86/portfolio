import { HTMLAttributes } from "react";
import { SectionContainer } from "@/components/views/section-container";
import { allFooters } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { myComponents } from "@/mdx-components";
import { cn } from "@/lib/utils";

export function Footer() {
  const doc = allFooters.length > 0 ? allFooters[0] : null;

  if (doc === null) return null;

  return (
    <SectionContainer className="my-32">
      <div className="flex flex-col justify-center gap-8 py-8">
        <MDXContent
          code={doc.mdx}
          components={{
            ...myComponents,
            p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
              <p className={cn("leading-7 text-gray-500 [&:not(:first-child)]:mt-6", className)} {...props} />
            ),
          }}
        />
      </div>
    </SectionContainer>
  );
}
