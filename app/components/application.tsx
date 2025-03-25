import { HexCore } from "@/components/architecture/hex-core";
import Image from "next/image";
import { Node } from "@/lib/flow/components/node/node";
import { Position } from "@/lib/flow/common/types";
import { ExternalItem } from "@/components/architecture/external-item";
import { Left } from "@/lib/scroll/components/left";
import { applicationDocs } from "@/docs/docs-2";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { ArchitectureDoc } from "@/components/architecture/doc";
import { Right } from "@/lib/scroll/components/right";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { Title } from "@/components/project/title";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { readDocs } from "@/lib/utils";
import { ScrollNav } from "@/lib/scroll/components/scroll-nav";
import { HexAdaptor } from "@/components/architecture/hex-adaptor";
import { FlowContainer } from "@/lib/flow/components/container/flow-container";
import { ScrollContainer } from "@/lib/scroll/components/scroll-container";

const edgeMap: Record<string, { source: string; target: string }> = {
  "application-nestjs": {
    source: "application-mobile-client",
    target: "application-rest-controller",
  },

  "application-api": {
    source: "application-mobile-client",
    target: "application-rest-controller",
  },

  "application-third-party": {
    source: "application-third-party",
    target: "application-api-gateway-lambda",
  },

  "application-subscription": {
    source: "application-subscription",
    target: "application-api-gateway-lambda",
  },

  "application-orm": {
    source: "application-repository",
    target: "application-mysql",
  },

  "application-outbound": {
    source: "application-outbound",
    target: "application-cloudwatch",
  },
};

export async function Application() {
  const data = await readDocs(applicationDocs);

  return (
    <ScrollStoreProvider ids={data.map((d) => d.id)} edgeMap={edgeMap}>
      <ScrollContainer>
        <Title>
          <h2 className="text-sm text-gray-500">디지털 뉴트리션</h2>
          <h3 className="text-xl font-bold">사운드필 애플리케이션 백엔드 개발</h3>
        </Title>
        <div className="flex gap-8">
          <ScrollNav>
            {data.map((d) => (
              <ScrollSelector key={d.id} id={d.id} title={d.title} />
            ))}
          </ScrollNav>
          <div className="mr-16 flex">
            <Left>
              <FlowContainer className="flex h-full w-full flex-row items-center justify-center gap-18">
                <div className="flex h-6/12 w-full flex-col items-start justify-around md:items-center">
                  <ExternalItem title="Client">
                    <Node
                      id="application-mobile-client"
                      edges={[{ id: "application-rest-controller", type: "bezier" }]}
                    >
                      <Image src="/misc/mobile-client.svg" width={32} height={32} alt={"mobile-client"} />
                    </Node>
                  </ExternalItem>

                  <ExternalItem title="Third party">
                    <Node
                      id="application-third-party"
                      position={Position.Right}
                      edges={[{ id: "application-api-gateway-lambda" }]}
                    >
                      <Image src="/misc/third-party.svg" alt={"third-party-icon"} width={32} height={32} />
                    </Node>
                  </ExternalItem>
                  <ExternalItem title="App Store">
                    <Node
                      id="application-subscription"
                      position={Position.Right}
                      edges={[{ id: "application-api-gateway-lambda" }]}
                    >
                      <Image src="/misc/app-store.svg" alt={"app-store-icon"} width={32} height={32} />
                    </Node>
                  </ExternalItem>
                  <ExternalItem title="Play Store">
                    <Image src="/misc/play-store.svg" alt={"play-store-icon"} width={32} height={32} />
                  </ExternalItem>
                </div>

                <div className="relative flex h-full w-full items-center justify-center">
                  <HexCore className="bg-aws-charcoal-dimmed h-96 p-1">
                    <HexCore className="h-full bg-white"></HexCore>
                  </HexCore>

                  <div className="absolute h-96 w-96">
                    <div className="flex h-full w-full items-center justify-center gap-6">
                      <div>보안</div>
                      <div>테스트 자동화</div>
                      <div>ORM</div>
                    </div>

                    <HexAdaptor className="top-3/4 left-1/12">
                      <Node id="application-api-gateway-lambda" className="my-auto">
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
                            <Image
                              src="/aws/Arch_AWS-Lambda_32.svg"
                              width={32}
                              height={32}
                              alt={"Arch_AWS-Lambda_32"}
                            />
                          </ExternalItem>
                        </div>
                      </Node>
                    </HexAdaptor>

                    <HexAdaptor className="top-1/4 left-1/12">
                      <Node id="application-rest-controller">
                        <h4 className="px-2 text-sm font-semibold">Rest API</h4>
                      </Node>
                    </HexAdaptor>

                    <HexAdaptor className="top-1/4 left-11/12">
                      <Node id="application-outbound" edges={[{ id: "application-cloudwatch" }]}>
                        <h4 className="px-2 text-sm font-semibold text-nowrap">Outbound</h4>
                      </Node>
                    </HexAdaptor>

                    <HexAdaptor className="top-3/4 left-11/12">
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
          </div>
        </div>
      </ScrollContainer>
    </ScrollStoreProvider>
  );
}
