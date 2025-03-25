import { toc } from "mdast-util-toc";
import path from "node:path";
import * as fs from "node:fs";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import { ArchitectureProjectType, ParsedArchitectureProjectType } from "@/docs/docs-2";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import production from "react/jsx-runtime";
import { myComponents } from "@/mdx-components";
//
// type Metadata = {
//   title: string;
//   period: string;
//   overview: string;
// };

// export function slugify(str: string) {
//   return str.toLowerCase().replace(/\s/g, "-");
// }
//
// function parseFrontMatter(fileContent: string) {
//   const frontMatterRegex = /---\s*([\s\S]*?)\s*---/;
//   const match = frontMatterRegex.exec(fileContent);
//   const frontMatterBlock = match![1];
//   const content = fileContent.replace(frontMatterRegex, "").trim();
//   const frontMatterLines = frontMatterBlock.trim().split("\n");
//   const metadata: Partial<Metadata> = {};
//
//   frontMatterLines.forEach((line) => {
//     const [key, ...valueArr] = line.split(": ");
//     let value = valueArr.join(": ").trim();
//     value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
//     metadata[key.trim() as keyof Metadata] = value;
//   });
//
//   return { metadata: metadata as Metadata, content };
// }

// function getMDXFiles(dir: string) {
//   return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
// }
//
// function readMDXFile(filePath: string) {
//   const rawContent = fs.readFileSync(filePath, "utf-8");
//   return parseFrontMatter(rawContent);
// }
//
// function getMDXData(dir: string) {
//   const mdxFiles = getMDXFiles(dir);
//   return mdxFiles.map((file) => {
//     const { metadata, content } = readMDXFile(path.join(dir, file));
//     const slug = path.basename(file, path.extname(file));
//
//     return {
//       metadata,
//       slug,
//       content,
//     };
//   });
// }

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenNode(node) {
  const p = [];
  visit(node, (node) => {
    if (!textTypes.includes(node.type)) return;
    p.push(node.value);
  });
  return p.join(``);
}

interface Item {
  title: string;
  url: string;
  items?: Item[];
}

interface Items {
  items?: Item[];
}

function getItems(node, current): Items {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = item.url;
        current.title = flattenNode(node);
      }

      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === "list") {
    current.items = node.children.map((i) => getItems(i, {}));

    return current;
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {});

    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }

    return heading;
  }

  return {};
}

const getToc = () => (node, file) => {
  const table = toc(node);
  file.data = getItems(table.map, {});
};

export type TableOfContents = Items;

export async function getTableOfContents(slug: string): Promise<TableOfContents> {
  const file = fs.readFileSync(path.join(process.cwd(), "docs", `${slug}.mdx`), {
    encoding: "utf8",
  });
  const result = await remark().use(getToc).process(file);
  return result.data as TableOfContents;
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
