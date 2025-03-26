import { HexCore } from "@/components/architecture/hex-core";
import Image from "next/image";
import { Node } from "@/lib/flow/components/node/node";
import { Position } from "@/lib/flow/common/types";
import { ExternalItem } from "@/components/architecture/external-item";
import { Left } from "@/lib/scroll/components/left";
import { applicationDocs } from "@/docs/docs";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { ArchitectureDoc } from "@/components/architecture/doc";
import { Right } from "@/lib/scroll/components/right";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { Title } from "@/lib/scroll/components/title";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { readDocs } from "@/lib/utils";
import { ScrollNav } from "@/lib/scroll/components/scroll-nav";
import { HexAdaptor } from "@/components/architecture/hex-adaptor";
import { FlowContainer } from "@/lib/flow/components/container/flow-container";
import { ScrollContainer } from "@/lib/scroll/components/scroll-container";
import { Building2, Smartphone } from "lucide-react";
import { ScrollInnerContainer } from "@/lib/scroll/components/scroll-inner-container";
import { myComponents } from "@/mdx-components";
import Link from "next/link";
import { FlowStoreProvider } from "@/lib/flow/context/flow-context-provider";

const edgeMap: Record<string, { source: string; target: string }[]> = {
  "application-nestjs": [
    {
      source: "application-mobile-client",
      target: "application-rest-controller",
    },
  ],

  "application-api": [
    {
      source: "application-mobile-client",
      target: "application-rest-controller",
    },
  ],

  "application-third-party": [
    {
      source: "application-third-party",
      target: "application-api-gateway",
    },
    {
      source: "application-api-gateway",
      target: "application-lambda",
    },
    {
      source: "application-lambda",
      target: "application-dynamodb",
    },
  ],

  "application-subscription": [
    {
      source: "application-app-store",
      target: "application-api-gateway",
    },
    {
      source: "application-play-store",
      target: "application-api-gateway",
    },
    {
      source: "application-api-gateway",
      target: "application-lambda",
    },
    {
      source: "application-lambda",
      target: "application-dynamodb",
    },
  ],

  "application-security": [
    {
      source: "application-mobile-client",
      target: "application-rest-controller",
    },
    {
      source: "application-rest-controller",
      target: "application-security",
    },
  ],

  "application-orm": [
    {
      source: "application-orm",
      target: "application-repository",
    },
    {
      source: "application-repository",
      target: "application-mysql",
    },
  ],

  "application-outbound": [
    {
      source: "application-outbound",
      target: "application-cloudwatch",
    },
    {
      source: "application-outbound",
      target: "application-google-chat",
    },
  ],
};

export async function Application() {
  const data = await readDocs(applicationDocs, myComponents);

  return (
    <FlowStoreProvider>
      <ScrollStoreProvider ids={data.map((d) => d.id)} edgeMap={edgeMap}>
        <ScrollContainer>
          <Title>
            <h2 className="text-sm text-gray-500">디지털 뉴트리션</h2>
            <h3 className="text-xl font-bold">
              <Link
                className="cursor-pointer underline"
                href="https://apps.apple.com/kr/app/%EC%82%AC%EC%9A%B4%EB%93%9C%ED%95%84-%EC%88%98%EB%A9%B4-%ED%9C%B4%EC%8B%9D-%EC%A7%91%EC%A4%91%EB%A0%A5/id6450494947"
                target="_blank"
              >
                Soundpill(사운드 테라피 서비스)
              </Link>{" "}
              앱 백엔드 개발
            </h3>
          </Title>
          <ScrollNav>
            {data.map((d) => (
              <ScrollSelector key={d.id} id={d.id} title={d.title} />
            ))}
          </ScrollNav>
          <ScrollInnerContainer>
            <Left>
              <FlowContainer className="flex h-full w-full flex-row items-center justify-center gap-18">
                <div className="flex h-6/12 w-full flex-col items-start justify-around md:items-center">
                  <ExternalItem title="Client">
                    <Node
                      id="application-mobile-client"
                      edges={[{ id: "application-rest-controller", type: "bezier" }]}
                    >
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

                <div className="relative flex h-full w-full items-center justify-center">
                  <HexCore className="bg-aws-charcoal-dimmed size-80 p-1">
                    <HexCore className="aspect-square h-full bg-white" />
                  </HexCore>

                  <div className="absolute size-80">
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
                            <Image
                              src="/aws/Arch_AWS-Lambda_32.svg"
                              width={32}
                              height={32}
                              alt={"Arch_AWS-Lambda_32"}
                            />
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

                <div className="flex h-6/12 w-full flex-col items-end justify-around md:items-center">
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
            </Left>

            <Right>
              {data.map((d) => (
                <ScrollItem key={d.id} id={d.id}>
                  <ArchitectureDoc id={d.id}>{d.doc}</ArchitectureDoc>
                </ScrollItem>
              ))}
            </Right>
          </ScrollInnerContainer>
        </ScrollContainer>
      </ScrollStoreProvider>
    </FlowStoreProvider>
  );
}
