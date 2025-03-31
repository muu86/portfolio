import { HTMLAttributes } from "react";
import { allFooters } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { myComponents } from "@/mdx-components";
import { cn } from "@/lib/utils";

export function Footer() {
  const doc = allFooters.length > 0 ? allFooters[0] : null;

  if (doc === null) return null;

  return (
    <footer className="border-gray-400y mx-auto my-32 w-full max-w-5xl border-t">
      <MDXContent
        code={doc.mdx}
        components={{
          ...myComponents,
          p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
            <p className={cn("leading-7 text-gray-500 [&:not(:first-child)]:mt-6", className)} {...props} />
          ),
        }}
      />
    </footer>
  );
}
