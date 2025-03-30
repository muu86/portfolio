import { HexCore } from "@/components/project/hex-core";
import Image from "next/image";
import { Node } from "@/lib/flow/components/node/node";
import { Position } from "@/lib/flow/types";
import { ExternalItem } from "@/components/project/external-item";
import { ProjectLeft } from "@/components/project/project-left";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { ArchitectureDoc } from "@/components/project/doc";
import { ProjectRight } from "@/components/project/project-right";
import { ProjectTitle } from "@/components/project/project-title";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { ScrollNav } from "@/lib/scroll/components/scroll-nav";
import { HexAdaptor } from "@/components/project/hex-adaptor";
import { FlowContainer } from "@/lib/flow/components/container/flow-container";
import { ProjectContainer } from "@/components/project/project-container";
import { Building2, Smartphone } from "lucide-react";
import { ProjectGridContainer } from "@/components/project/project-grid-container";
import { myComponents } from "@/mdx-components";
import { FlowStoreProvider } from "@/lib/flow/context/flow-context-provider";
import { allDigitalNutritionApplications } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { FlowSelector } from "@/components/flow-selector";

export async function Application() {
  const docs = allDigitalNutritionApplications.sort((a, b) => a.order - b.order);
  return (
    <FlowStoreProvider>
      <FlowSelector />

      <ProjectContainer>
        <ProjectTitle>
          <h2 className="text-xl text-gray-500">디지털 뉴트리션</h2>
          <h3 className="text-2xl font-bold">
            <a
              className="underline"
              href="https://apps.apple.com/kr/app/%EC%82%AC%EC%9A%B4%EB%93%9C%ED%95%84-%EC%88%98%EB%A9%B4-%ED%9C%B4%EC%8B%9D-%EC%A7%91%EC%A4%91%EB%A0%A5/id6450494947"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soundpill(사운드 테라피 서비스)
            </a>{" "}
            앱 백엔드 개발
          </h3>
        </ProjectTitle>
        <ScrollNav>
          {docs.map((doc) => (
            <ScrollSelector key={doc.id} id={doc.id} title={doc.title} />
          ))}
        </ScrollNav>
        <ProjectGridContainer>
          <ProjectLeft>
            <FlowContainer className="grid aspect-square w-full max-w-6xl grid-cols-12 grid-rows-12 rounded-md bg-gray-50">
              <div className="cols-start-1 col-span-2 row-span-12 row-start-1 grid grid-flow-row">
                <ExternalItem title="Client">
                  <Node id="application-mobile-client" edges={[{ id: "application-rest-controller", type: "bezier" }]}>
                    <Smartphone size={32} strokeWidth={1} />
                  </Node>
                </ExternalItem>

                <ExternalItem title="Third party">
                  <Node
                    id="application-third-party"
                    position={Position.Right}
                    edges={[{ id: "application-api-gateway" }]}
                  >
                    <Building2 strokeWidth={1} size={32} />
                  </Node>
                </ExternalItem>
                <ExternalItem title="App Store">
                  <Node
                    id="application-app-store"
                    position={Position.Right}
                    edges={[{ id: "application-api-gateway" }]}
                  >
                    <Image src="/misc/app-store.svg" alt={"app-store-icon"} width={32} height={32} />
                  </Node>
                </ExternalItem>

                <ExternalItem title="Play Store">
                  <Node
                    id="application-play-store"
                    position={Position.Right}
                    edges={[{ id: "application-api-gateway" }]}
                  >
                    <Image src="/misc/play-store.svg" alt={"play-store-icon"} width={32} height={32} />
                  </Node>
                </ExternalItem>
              </div>

              <div className="relative col-span-6 col-start-4 row-span-6 row-start-4 grid place-items-center p-4">
                <HexCore className="bg-aws-charcoal-dimmed aspect-square h-full p-1">
                  <HexCore className="aspect-square h-full bg-gray-50" />
                </HexCore>

                <div className="absolute aspect-square h-full">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-6">
                    <Node id="application-security">
                      <p className="p-2 font-semibold">보안</p>
                    </Node>
                    <p className="font-semibold">테스트 자동화</p>
                    <Node
                      id="application-orm"
                      edges={[{ id: "application-repository", position: Position.Left, hidden: true }]}
                    >
                      <p className="p-2 font-semibold">ORM</p>
                    </Node>
                  </div>

                  <HexAdaptor className="top-1/4 left-2/12">
                    <Node id="application-rest-controller" edges={[{ id: "application-security", hidden: true }]}>
                      <h4 className="px-2 text-sm font-semibold">Rest API</h4>
                    </Node>
                  </HexAdaptor>

                  <HexAdaptor className="top-3/4 left-2/12">
                    <div className="flex gap-2 rounded-md">
                      <ExternalItem title="API Gateway">
                        <Node id="application-api-gateway" edges={[{ id: "application-lambda" }]}>
                          <Image
                            src="/aws/Arch_Amazon-API-Gateway_32.svg"
                            alt={"Arch_Amazon-API-Gateway_32"}
                            width={32}
                            height={32}
                          />
                        </Node>
                      </ExternalItem>
                      <ExternalItem title="Lambda">
                        <Node
                          id="application-lambda"
                          edges={[{ id: "application-dynamodb", position: Position.Top, hidden: true }]}
                        >
                          <Image src="/aws/Arch_AWS-Lambda_32.svg" width={32} height={32} alt={"Arch_AWS-Lambda_32"} />
                        </Node>
                      </ExternalItem>
                    </div>
                  </HexAdaptor>

                  <HexAdaptor className="top-14/12 left-6/12">
                    <ExternalItem title="Dynamodb">
                      <Node id="application-dynamodb">
                        <Image
                          src="/aws/Arch_Amazon-DynamoDB_32.svg"
                          alt={"Arch_Amazon-DynamoDB_32"}
                          width={32}
                          height={32}
                        />
                      </Node>
                    </ExternalItem>
                  </HexAdaptor>

                  <HexAdaptor className="top-1/4 left-10/12">
                    <Node
                      id="application-outbound"
                      edges={[{ id: "application-cloudwatch" }, { id: "application-google-chat" }]}
                    >
                      <h4 className="px-2 text-sm font-semibold text-nowrap">Outbound</h4>
                    </Node>
                  </HexAdaptor>

                  <HexAdaptor className="top-3/4 left-10/12">
                    <Node
                      id="application-repository"
                      position={Position.Right}
                      edges={[{ id: "application-mysql", position: Position.Left }]}
                    >
                      <h4 className="px-2 text-sm font-semibold">Repository</h4>
                    </Node>
                  </HexAdaptor>
                </div>
              </div>

              <div className="col-span-2 col-start-11 row-span-12 grid grid-flow-row">
                <ExternalItem title="Cloudwatch">
                  <Node id="application-cloudwatch">
                    <Image
                      src="/aws/Arch_Amazon-CloudWatch_32.svg"
                      width={32}
                      height={32}
                      alt={"Arch_Amazon-CloudWatch_32"}
                    />
                  </Node>
                </ExternalItem>

                <ExternalItem title="Google Chat">
                  <Node id="application-google-chat">
                    <Image src="/misc/google-chat.svg" width={32} height={32} alt={"google-chat-icon"} />
                  </Node>
                </ExternalItem>

                <ExternalItem title="RDS(MySQL)">
                  <Node id="application-mysql">
                    <Image src="/aws/Arch_Amazon-RDS_32.svg" width={32} height={32} alt={"Arch_Amazon-RDS_32"} />
                  </Node>
                </ExternalItem>
              </div>
            </FlowContainer>
          </ProjectLeft>

          <ProjectRight>
            {docs.map((doc) => (
              <ScrollItem key={doc.id} id={doc.id}>
                <ArchitectureDoc id={doc.id}>
                  <MDXContent code={doc.mdx} components={myComponents} />
                </ArchitectureDoc>
              </ScrollItem>
            ))}
          </ProjectRight>
        </ProjectGridContainer>
      </ProjectContainer>
    </FlowStoreProvider>
  );
}
