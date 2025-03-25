import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArchitectureProjectType, ParsedArchitectureProjectType } from "@/docs/docs-2";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import production from "react/jsx-runtime";
import { myComponents } from "@/mdx-components";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function kebabToPascal(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export async function readDocs(docs: ArchitectureProjectType[]): Promise<ParsedArchitectureProjectType[]> {
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
            components: myComponents,
          })
          .process(doc.doc)
      ).result,
    })),
  );
}
