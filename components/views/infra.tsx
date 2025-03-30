import { CloudContainer } from "@/components/project/cloud-container";
import { Icon } from "@/components/project/icon";
import { ArchitectureDoc } from "@/components/project/doc";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { ProjectLeft } from "@/components/project/project-left";
import { ProjectRight } from "@/components/project/project-right";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { ProjectTitle } from "@/components/project/project-title";
import { ScrollNav } from "@/lib/scroll/components/scroll-nav";
import { ProjectContainer } from "@/components/project/project-container";
import { ProjectGridContainer } from "@/components/project/project-grid-container";
import { FlowStoreProvider } from "@/lib/flow/context/flow-context-provider";
import { allDigitalNutritionInfras } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { myComponents } from "@/mdx-components";
import { FlowSelector } from "@/components/flow-selector";

export async function Infra() {
  const docs = allDigitalNutritionInfras.sort((a, b) => a.order - b.order);

  return (
    <FlowStoreProvider>
      <ProjectContainer>
        <FlowSelector />

        <ProjectTitle>
          <h2 className="text-xl text-gray-400">디지털 뉴트리션</h2>
          <h3 className="text-2xl font-bold">AWS 인프라 구축</h3>
        </ProjectTitle>
        <ScrollNav>
          {docs.map((doc) => (
            <ScrollSelector key={doc.id} id={doc.id} title={doc.title} />
          ))}
        </ScrollNav>
        <ProjectGridContainer>
          <ProjectLeft>
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <CloudContainer
                  id="projects/digital-nutrition/infra/0_terraform"
                  title="Terraform"
                  source="tech/terraform.svg"
                  color="purple"
                  className="shadow-2xl"
                >
                  <div className="flex h-full w-full gap-8">
                    <div className="flex w-1/3 grow-0 flex-col flex-wrap items-start justify-around gap-4 ring-0">
                      <div className="flex w-full items-start justify-around">
                        <Icon source="aws/Arch_Amazon-CloudFront_32.svg" name="Cloudfront" />
                        <Icon source="aws/Arch_Amazon-Route-53_32.svg" name="Route53" />
                      </div>
                      <div className="flex w-full items-start justify-around">
                        <Icon source="aws/Arch_Amazon-API-Gateway_32.svg" name="API Gateway" />
                        <Icon
                          id="projects/digital-nutrition/infra/50_lambda"
                          color="orange"
                          source="aws/Arch_AWS-Lambda_32.svg"
                          name="Lambda"
                        />
                      </div>
                      <div className="flex w-full items-start justify-around">
                        <Icon source="aws/Arch_Amazon-Simple-Storage-Service_32.svg" name="S3" />
                        <Icon source="aws/Arch_AWS-Secrets-Manager_32.svg" name="Secret Manager" />
                      </div>
                    </div>

                    <CloudContainer title="vpc" color="purple" source="aws/Virtual-private-cloud-VPC_32.svg">
                      <div className="flex w-full flex-col gap-8">
                        <div className="flex items-center justify-around gap-8">
                          <Icon source="aws/Arch_AWS-WAF_32.svg" name="WAF" />
                          <Icon
                            id="projects/digital-nutrition/infra/40_alb"
                            source="aws/Arch_Elastic-Load-Balancing_32.svg"
                            name="ALB"
                            color="purple"
                          />
                          <Icon source="aws/Arch_Amazon-EC2_32.svg" name="Bastion" />
                        </div>

                        <CloudContainer
                          id={[
                            "projects/digital-nutrition/infra/10_eks",
                            "projects/digital-nutrition/infra/20_eks-environment",
                          ]}
                          title="kubernetes"
                          source="aws/Arch_Amazon-Elastic-Kubernetes-Service_32.svg"
                          color="orange"
                        >
                          <CloudContainer
                            id="projects/digital-nutrition/infra/30_karpenter"
                            title="karpenter-autoscaling"
                            source="aws/Auto-Scaling-group_32.svg"
                            color="orange"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <Icon
                                id="projects/digital-nutrition/infra/30_karpenter"
                                source="aws/Res_Amazon-EC2_Instance_48.svg"
                              />
                              <Icon
                                id="projects/digital-nutrition/infra/30_karpenter"
                                source="aws/Res_Amazon-EC2_Instance_48.svg"
                              />
                              <Icon
                                id="projects/digital-nutrition/infra/30_karpenter"
                                source="aws/Res_Amazon-EC2_Instance_48.svg"
                              />
                            </div>
                          </CloudContainer>
                        </CloudContainer>
                      </div>
                    </CloudContainer>
                  </div>
                </CloudContainer>
              </div>
            </div>
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
