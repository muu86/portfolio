import { Core } from "@/components/application-architecture/core";
import Image from "next/image";
import { Node } from "@/lib/flow/components/node/node";
import { Position } from "@/lib/flow/common/types";
import { ExternalItem } from "@/components/architecture/external-item";
import { StickyScroller } from "@/components/sticky-scroller";
import { Left } from "@/components/sticky-scroller/left";
import { applicationDocs, ParsedArchitectureProjectType } from "@/docs/docs-2";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import production from "react/jsx-runtime";
import { myComponents } from "@/mdx-components";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { ArchitectureDoc } from "@/components/architecture/doc";
import { Right } from "@/components/sticky-scroller/right";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { Title } from "@/components/project/title";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

export async function Application() {
  const data: ParsedArchitectureProjectType[] = await Promise.all(
    applicationDocs.map(async (doc) => ({
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
          <h2 className="text-sm text-gray-500">디지털 뉴트리션</h2>
          <h3 className="text-xl font-bold">사운드필 애플리케이션 백엔드 개발</h3>

          <ul className="mt-8 flex h-full flex-row gap-4">
            {data.map((d) => (
              <ScrollSelector key={d.id} id={d.id}>
                <li>{d.title}</li>
              </ScrollSelector>
            ))}
          </ul>
        </Title>
        <div className="flex gap-8 px-16">
          <Left>
            <div className="flex w-full flex-row gap-18">
              <div className="flex w-full flex-col items-center justify-around">
                <ExternalItem title="Client">
                  <Node id="nextjs-mobile-client" edges={[{ id: "nextjs-rest-controller" }]}>
                    <Image src="/misc/mobile-client.svg" width={32} height={32} alt={"mobile-client"} />
                  </Node>
                </ExternalItem>

                <div className="flex gap-22 p-4">
                  <div className="flex flex-col items-center justify-around gap-8">
                    <Node
                      id="nextjs-third-party"
                      position={Position.Right}
                      edges={[{ id: "nextjs-api-gateway-lambda" }]}
                    >
                      <ExternalItem title="Third party">
                        <Image src="/misc/third-party.svg" alt={"third-party-icon"} width={32} height={32} />
                      </ExternalItem>
                    </Node>
                    <Node id="nextjs-store" position={Position.Right} edges={[{ id: "nextjs-api-gateway-lambda" }]}>
                      <div className="flex gap-6 rounded-md">
                        <ExternalItem title="App Store">
                          <Image src="/misc/app-store.svg" alt={"app-store-icon"} width={32} height={32} />
                        </ExternalItem>
                        <ExternalItem title="Play Store">
                          <Image src="/misc/play-store.svg" alt={"play-store-icon"} width={32} height={32} />
                        </ExternalItem>
                      </div>
                    </Node>
                  </div>
                </div>
              </div>

              <div className="relative flex h-full w-full items-center justify-center">
                <Core className="bg-aws-charcoal h-96 p-1">
                  <Core className="h-full bg-white"></Core>
                </Core>

                <div className="absolute h-96 w-96">
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <div className="flex h-full w-full items-center justify-center">
                      <div>보안</div>
                    </div>
                    <div className="flex h-full w-full items-center justify-center gap-8">
                      <div>ORM</div>
                      <div>테스트 자동화</div>
                    </div>
                  </div>

                  <div className="absolute top-3/4 left-1/12 -translate-x-1/2 -translate-y-1/2 bg-white">
                    <Node id="nextjs-api-gateway-lambda" className="my-auto">
                      <div className="flex gap-6 rounded-md p-4">
                        <ExternalItem title="API Gateway">
                          <Image
                            src="/aws/Arch_Amazon-API-Gateway_32.svg"
                            alt={"Arch_Amazon-API-Gateway_32"}
                            width={32}
                            height={32}
                          />
                        </ExternalItem>
                        <ExternalItem title="Lambda">
                          <Image src="/aws/Arch_AWS-Lambda_32.svg" width={32} height={32} alt={"Arch_AWS-Lambda_32"} />
                        </ExternalItem>
                      </div>
                    </Node>
                  </div>

                  <div className="absolute top-1/4 left-1/12 -translate-x-1/2 -translate-y-1/2 bg-white p-4">
                    <Node id="nextjs-rest-controller">
                      <h4 className="px-2 text-sm font-semibold">Rest Controller</h4>
                    </Node>
                  </div>

                  <div className="absolute top-1/4 left-11/12 -translate-x-1/2 border border-gray-200 bg-white">
                    <Node id="nextjs-event-emitter" edges={[{ id: "nextjs-cloudwatch" }]}>
                      <h4 className="px-2 text-sm font-semibold text-nowrap">NextJS Event Emitter</h4>
                    </Node>
                  </div>

                  <div className="absolute top-3/4 left-11/12 -translate-x-1/2 border border-gray-200 bg-white">
                    <Node
                      id="nextjs-repository"
                      position={Position.Right}
                      edges={[{ id: "nextjs-mysql", position: Position.Left }]}
                    >
                      <h4 className="px-2 text-sm font-semibold">Repository</h4>
                    </Node>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-around">
                <div className="flex gap-6">
                  <ExternalItem title="Cloudwatch">
                    <Node id="nextjs-cloudwatch">
                      <Image
                        src="/aws/Arch_Amazon-CloudWatch_32.svg"
                        width={32}
                        height={32}
                        alt={"Arch_Amazon-CloudWatch_32"}
                      />
                    </Node>
                  </ExternalItem>

                  <ExternalItem title="Google Chat">
                    <Node id="nextjs-google-chat">
                      <Image src="/misc/google-chat.svg" width={32} height={32} alt={"google-chat-icon"} />
                    </Node>
                  </ExternalItem>
                </div>

                <ExternalItem title="RDS(MySQL)">
                  <Node id="nextjs-mysql">
                    <Image src="/aws/Arch_Amazon-RDS_32.svg" width={32} height={32} alt={"Arch_Amazon-RDS_32"} />
                  </Node>
                </ExternalItem>
              </div>
            </div>
          </Left>

          <Right>
            {data.map((d) => (
              <ScrollItem key={d.id} id={d.id}>
                <ArchitectureDoc id={d.id}>{d.doc}</ArchitectureDoc>
              </ScrollItem>
            ))}
          </Right>
        </div>
      </StickyScroller>
    </ScrollStoreProvider>
  );
}
