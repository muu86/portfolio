import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArchitectureProjectType, ParsedArchitectureProjectType } from "@/docs/docs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import production from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function readDocs(
  docs: ArchitectureProjectType[],
  components: MDXComponents,
): Promise<ParsedArchitectureProjectType[]> {
  return Promise.all(
    docs.map(async (doc) => ({
      id: doc.id,
      title: doc.title,
      doc: (
        await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeReact, {
            ...production,
            components,
          })
          .process(doc.doc)
      ).result,
    })),
  );
}
