import { StickyScroller } from "@/components/sticky-scroller";
import { Title } from "@/components/project/title";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { Left } from "@/components/sticky-scroller/left";
import { ExternalItem } from "@/components/architecture/external-item";
import { Node } from "@/lib/flow/components/node/node";
import Image from "next/image";
import { Position } from "@/lib/flow/common/types";
import { Core } from "@/components/application-architecture/core";
import { Right } from "@/components/sticky-scroller/right";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { ArchitectureDoc } from "@/components/architecture/doc";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { applicationDocs, ParsedArchitectureProjectType, uniitechDocs } from "@/docs/docs-2";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import production from "react/jsx-runtime";
import { myComponents } from "@/mdx-components";

export async function Uniitech() {
  const data: ParsedArchitectureProjectType[] = await Promise.all(
    uniitechDocs.map(async (doc) => ({
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

  return (
    <ScrollStoreProvider ids={data.map((d) => d.id)}>
      <StickyScroller>
        <Title>
          <h2 className="text-sm text-gray-500">유니아이텍</h2>
          <h3 className="text-xl font-bold">SI 프로젝트 수행</h3>

          {/*<ul className="mt-8 flex list-inside list-disc flex-col gap-4">*/}
          {/*  {data.map((d) => (*/}
          {/*    <ScrollSelector key={d.id} id={d.id}>*/}
          {/*      <li>{d.title}</li>*/}
          {/*    </ScrollSelector>*/}
          {/*  ))}*/}
          {/*</ul>*/}
        </Title>
        <div className="flex gap-8 px-16">
          <Left>
            <div className="flex items-stretch justify-center gap-20">
              {data.map((d) => (
                <div className="grow basis-1 rounded-md p-8 shadow-md" key={d.id}>
                  {d.doc}
                </div>
              ))}
            </div>
          </Left>

          {/*<Right>*/}
          {/*  {data.map((d) => (*/}
          {/*    <ScrollItem key={d.id} id={d.id}>*/}
          {/*      <ArchitectureDoc id={d.id}>{d.doc}</ArchitectureDoc>*/}
          {/*    </ScrollItem>*/}
          {/*  ))}*/}
          {/*</Right>*/}
        </div>
      </StickyScroller>
    </ScrollStoreProvider>
  );
}
