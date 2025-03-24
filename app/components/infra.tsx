import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { infraDocs, ParsedArchitectureProjectType } from "@/docs/docs-2";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import production from "react/jsx-runtime";
import { myComponents } from "@/mdx-components";
import { Container } from "@/components/architecture/container";
import { Icon } from "@/components/architecture/icon";
import { ArchitectureDoc } from "@/components/architecture/doc";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { StickyScroller } from "@/components/sticky-scroller";
import { Left } from "@/components/sticky-scroller/left";
import { Right } from "@/components/sticky-scroller/right";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { Title } from "@/components/project/title";

export async function Infra() {
  const data: ParsedArchitectureProjectType[] = await Promise.all(
    infraDocs.map(async (doc) => ({
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
          <h3 className="text-xl font-bold">AWS 인프라 구축</h3>

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
            <div className="relative flex w-full flex-col">
              <Container id="terraform" title="AWS cloud" icon="AWS-Cloud-logo_32_charcoal">
                <div className="flex min-h-full w-1/12 grow-0 flex-col items-center justify-center gap-4 ring-0">
                  <Icon icon="Arch_Amazon-CloudFront_32" name="Cloudfront" />
                  <Icon icon="Arch_Amazon-Route-53_32" name="Route53" />
                </div>

                <Container id="vpc" title="vpc" icon="Virtual-private-cloud-VPC_32_purple">
                  <div className="flex w-full flex-col gap-8 md:flex-row">
                    <Container id="public-subnet-0" title="public subnet" icon="Public-subnet_32_olive">
                      <Icon icon="Arch_AWS-WAF_32" name="Waf" />
                      <Icon icon="Arch_Amazon-EC2_32_orange" name="Bastion" />
                    </Container>

                    <Container id="private-subnet-0" title="private subnet" icon="Private-subnet_32_cyan">
                      <Container id="eks" title="kubernetes" icon="Arch_Amazon-Elastic-Kubernetes-Service_32_orange">
                        <Container id="karpenter" title="karpenter-autoscaling" icon="Auto-Scaling-group_32_orange">
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

                <div className="flex min-h-full w-1/12 grow-0 flex-col items-center justify-center gap-12 ring-0">
                  <Icon icon="Arch_Amazon-Simple-Storage-Service_32" name="S3" />
                  <Icon icon="Arch_Amazon-Elastic-Container-Registry_32" name="ECR" />
                  <Icon icon="Arch_AWS-Secrets-Manager_32" name="Secret Manager" />
                </div>
              </Container>
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
