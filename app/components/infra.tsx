import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { infraDocs } from "@/docs/docs-2";
import { Container } from "@/components/architecture/container";
import { Icon } from "@/components/architecture/icon";
import { ArchitectureDoc } from "@/components/architecture/doc";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { Left } from "@/lib/scroll/components/left";
import { Right } from "@/lib/scroll/components/right";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { Title } from "@/components/project/title";
import { readDocs } from "@/lib/mdx";
import { ScrollNav } from "@/lib/scroll/components/scroll-nav";
import { ScrollContainer } from "@/lib/scroll/components/scroll-container";
import { ScrollButton } from "@/lib/scroll/components/scroll-button";

export async function Infra() {
  const data = await readDocs(infraDocs);

  return (
    <ScrollStoreProvider ids={data.map((d) => d.id)}>
      <ScrollContainer>
        <Title>
          <h2 id="project-infra" className="text-sm text-gray-500">
            디지털 뉴트리션
          </h2>
          <h3 className="text-xl font-bold">AWS 인프라 구축</h3>
        </Title>
        <div className="flex gap-2">
          <ScrollNav>
            <ScrollButton href="#project" direction="up" />
            {data.map((d) => (
              <ScrollSelector key={d.id} id={d.id} title={d.title} />
            ))}
            <ScrollButton href="#project-uniitech" direction="down" />
          </ScrollNav>
          <div className="mx-16 flex gap-4">
            <Left>
              <div className="relative flex h-full w-full flex-col items-center justify-center">
                <div className="flex h-full w-full items-center justify-center">
                  <Container id="terraform" title="AWS cloud" icon="AWS-Cloud-logo_32_charcoal">
                    <div className="flex h-full w-full flex-col gap-4">
                      <div className="flex w-full grow-0 items-center justify-around gap-4 ring-0">
                        <Icon icon="Arch_Amazon-CloudFront_32" name="Cloudfront" />
                        <Icon icon="Arch_Amazon-Route-53_32" name="Route53" />
                        <Icon icon="Arch_Amazon-Simple-Storage-Service_32" name="S3" />
                        <Icon icon="Arch_Amazon-Elastic-Container-Registry_32" name="ECR" />
                        <Icon icon="Arch_AWS-Secrets-Manager_32" name="Secret Manager" />
                      </div>

                      <Container id="vpc" title="vpc" icon="Virtual-private-cloud-VPC_32_purple">
                        <div className="flex w-full flex-col gap-8">
                          <Container id="public-subnet-0" title="public subnet" icon="Public-subnet_32_olive">
                            <Icon icon="Arch_AWS-WAF_32" name="Waf" />
                            <Icon icon="Arch_Amazon-EC2_32_orange" name="Bastion" />
                          </Container>

                          <Container id="private-subnet-0" title="private subnet" icon="Private-subnet_32_cyan">
                            <Container
                              id="eks"
                              title="kubernetes"
                              icon="Arch_Amazon-Elastic-Kubernetes-Service_32_orange"
                            >
                              <Container
                                id="karpenter"
                                title="karpenter-autoscaling"
                                icon="Auto-Scaling-group_32_orange"
                              >
                                <div className="flex items-center justify-center gap-2">
                                  <Icon id="karpenter" icon="Res_Amazon-EC2_Instance_48_orange" />
                                  <Icon id="karpenter" icon="Res_Amazon-EC2_Instance_48_orange" />
                                  <Icon id="karpenter" icon="Res_Amazon-EC2_Instance_48_orange" />
                                </div>
                              </Container>
                            </Container>
                          </Container>
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
          </div>
        </div>
      </ScrollContainer>
    </ScrollStoreProvider>
  );
}
