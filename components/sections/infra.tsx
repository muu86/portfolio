import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { infraDocs } from "@/docs/docs";
import { Container } from "@/components/architecture/container";
import { Icon } from "@/components/architecture/icon";
import { ArchitectureDoc } from "@/components/architecture/doc";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { Left } from "@/lib/scroll/components/left";
import { Right } from "@/lib/scroll/components/right";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { Title } from "@/lib/scroll/components/title";
import { readDocs } from "@/lib/utils";
import { ScrollNav } from "@/lib/scroll/components/scroll-nav";
import { ScrollContainer } from "@/lib/scroll/components/scroll-container";
import { ScrollInnerContainer } from "@/lib/scroll/components/scroll-inner-container";
import { myComponents } from "@/mdx-components";
import { FlowStoreProvider } from "@/lib/flow/context/flow-context-provider";

export async function Infra() {
  const data = await readDocs(infraDocs, myComponents);

  return (
    <FlowStoreProvider>
      <ScrollStoreProvider ids={data.map((d) => d.id)}>
        <ScrollContainer>
          <Title>
            <h2 className="text-sm text-gray-500">디지털 뉴트리션</h2>
            <h3 className="text-xl font-bold">AWS 인프라 구축</h3>
          </Title>
          <ScrollNav>
            {data.map((d) => (
              <ScrollSelector key={d.id} id={d.id} title={d.title} />
            ))}
          </ScrollNav>
          <ScrollInnerContainer>
            <Left>
              <div className="relative flex h-full w-full flex-col items-center justify-center px-4">
                <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                  <Container id="infra-terraform" title="Terraform" source="tech/terraform.svg" color="purple">
                    <div className="flex h-full w-full gap-4">
                      <div className="flex w-full grow-0 items-center justify-around gap-4 ring-0">
                        <Icon source="aws/Arch_Amazon-CloudFront_32.svg" name="Cloudfront" />
                        <Icon source="aws/Arch_Amazon-Route-53_32.svg" name="Route53" />
                        <Icon source="aws/Arch_Amazon-Simple-Storage-Service_32.svg" name="S3" />
                        <Icon source="aws/Arch_Amazon-Elastic-Container-Registry_32.svg" name="ECR" />
                        <Icon source="aws/Arch_AWS-Secrets-Manager_32.svg" name="Secret Manager" />
                      </div>

                      <Container
                        id="infra-vpc"
                        title="vpc"
                        color="purple"
                        source="aws/Virtual-private-cloud-VPC_32.svg"
                      >
                        <div className="flex w-full flex-col gap-8">
                          {/*<Container id="public-subnet-0" title="public subnet" icon="Public-subnet_32_olive">*/}
                          <div className="flex items-center justify-around gap-8">
                            <Icon source="aws/Arch_AWS-WAF_32.svg" name="WAF" />
                            <Icon
                              id="infra-alb"
                              source="aws/Arch_Elastic-Load-Balancing_32.svg"
                              name="ALB"
                              color="purple"
                            />
                            <Icon source="aws/Arch_Amazon-EC2_32.svg" name="Bastion" />
                          </div>

                          {/*</Container>*/}

                          {/*<Container id="infra-private-subnet-0" title="private subnet" icon="Private-subnet_32_cyan">*/}
                          <Container
                            id="infra-eks"
                            title="kubernetes"
                            source="aws/Arch_Amazon-Elastic-Kubernetes-Service_32.svg"
                            color="orange"
                          >
                            <Container
                              id="infra-karpenter"
                              title="karpenter-autoscaling"
                              source="aws/Auto-Scaling-group_32.svg"
                              color="orange"
                            >
                              <div className="flex items-center justify-center gap-2">
                                <Icon id="infra-karpenter" source="aws/Res_Amazon-EC2_Instance_48.svg" />
                                <Icon id="infra-karpenter" source="aws/Res_Amazon-EC2_Instance_48.svg" />
                                <Icon id="infra-karpenter" source="aws/Res_Amazon-EC2_Instance_48.svg" />
                              </div>
                            </Container>
                          </Container>
                          {/*</Container>*/}
                        </div>
                      </Container>
                    </div>
                  </Container>
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
          </ScrollInnerContainer>
        </ScrollContainer>
      </ScrollStoreProvider>
    </FlowStoreProvider>
  );
}
