import { Hero } from "@/components/hero";
import { Node } from "@/lib/flow/components/node/node";
import { FlowContainer } from "@/lib/flow/components/container/flow-container";
import { FlowStoreProvider } from "@/lib/flow/context/flow-context-provider";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import production from "react/jsx-runtime";
import { useMDXComponents } from "@/mdx-components";
import { docs2, ParseDocType } from "@/docs/docs-2";
import { Separator } from "@/components/ui/separator";
import { Infra } from "@/app/components/infra";
import { Application } from "@/app/components/application";
import { Position } from "@/lib/flow/common/types";
import { Career } from "@/app/components/career";
import { Project } from "@/app/components/project";

export default async function Home() {
  const data: ParseDocType[] = await Promise.all(
    docs2.map(async (item) => ({
      ...item,
      projects: await Promise.all(
        item.projects.map(async (project) => ({
          title: project.title,
          doc: (
            await unified()
              .use(remarkParse)
              .use(remarkRehype)
              .use(rehypeReact, {
                ...production,
                components: useMDXComponents({}),
              })
              .process(project.doc)
          ).result,
        })),
      ),
    })),
  );

  return (
    <FlowStoreProvider>
      <FlowContainer>
        <Hero />

        <Career />

        <Project />

        {/*<Infra />*/}
        {/*<Application />*/}

        {/*<section className="mx-auto w-5xl">*/}
        {/*  <h1 className="my-8 text-xl font-bold">경력</h1>*/}
        {/*  <Node*/}
        {/*    id="digital-nutrition"*/}
        {/*    edges={data.map((d) => ({ id: d.title }))}*/}
        {/*  >*/}
        {/*    <div className="flex flex-col gap-2 border border-gray-200 p-4">*/}
        {/*      <Link href="https://apps.apple.com/kr/app/%EC%82%AC%EC%9A%B4%EB%93%9C%ED%95%84-%EC%88%98%EB%A9%B4-%ED%9C%B4%EC%8B%9D-%EC%A7%91%EC%A4%91%EB%A0%A5/id6450494947">*/}
        {/*        <h2 className="text-xl font-semibold">디지털 뉴트리션</h2>*/}
        {/*      </Link>*/}
        {/*      <Separator />*/}
        {/*      <p></p>*/}
        {/*      <p className="text-sm text-gray-500">*/}
        {/*        회사의 첫 백엔드 개발자로 합류하여 초기 스타트업이 빠르게*/}
        {/*        안정적인 서비스를 제공하는데 기여*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </Node>*/}
        {/*  {data.map((d, i) => (*/}
        {/*    <ProjectProvider key={i} size={d.projects.length}>*/}
        {/*      <div className="mt-20">*/}
        {/*        <Title>*/}
        {/*          <Node*/}
        {/*            id={d.title}*/}
        {/*            edges={d.projects.map((p) => ({ id: p.title }))}*/}
        {/*          >*/}
        {/*            <div className="p-2">*/}
        {/*              <h3 className="text-xl font-semibold">{d.title}</h3>*/}
        {/*            </div>*/}
        {/*          </Node>*/}
        {/*        </Title>*/}

        {/*        <div className="relative mx-auto flex w-4xl gap-20 p-8">*/}
        {/*          <div className="flex flex-col items-start gap-16 p-12">*/}
        {/*            {d.projects.map((c, j) => (*/}
        {/*              <Item key={j} index={j}>*/}
        {/*                <Node id={c.title}>*/}
        {/*                  <div className="z-50 rounded-sm border border-gray-200 bg-white p-2 transition duration-200 hover:scale-105">*/}
        {/*                    {c.title}*/}
        {/*                  </div>*/}
        {/*                </Node>*/}
        {/*              </Item>*/}
        {/*            ))}*/}
        {/*          </div>*/}

        {/*          <DocContainer>*/}
        {/*            {d.projects.map((c, j) => (*/}
        {/*              <Doc key={j} index={j}>*/}
        {/*                {c.doc}*/}
        {/*              </Doc>*/}
        {/*            ))}*/}
        {/*          </DocContainer>*/}

        {/*          /!*<Architecture />*!/*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </ProjectProvider>*/}
        {/*  ))}*/}
        {/*</section>*/}

        <div className="mt-[100%]"></div>
      </FlowContainer>
    </FlowStoreProvider>
  );
}
