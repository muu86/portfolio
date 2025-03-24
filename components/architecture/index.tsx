import { Container } from "@/components/architecture/container";
import { ArchitectureDoc } from "@/components/architecture/doc";
import { OuterContainer } from "@/components/architecture/outer-container";
import { Icon } from "./icon";
import { infraDocs, ParsedArchitectureProjectType } from "@/docs/docs-2";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import production from "react/jsx-runtime";
import { myComponents } from "@/mdx-components";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";

export async function Architecture() {
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
    <ScrollStoreProvider>
      <OuterContainer>
        <div className="grow">
          <Container
            id="terraform"
            title="AWS cloud"
            icon="AWS-Cloud-logo_32_charcoal"
          >
            <Container
              id="vpc"
              title="vpc"
              icon="Virtual-private-cloud-VPC_32_purple"
            >
              <div className="flex w-full flex-col gap-8 md:flex-row">
                <Container
                  id="public-subnet-0"
                  title="public subnet"
                  icon="Public-subnet_32_olive"
                />

                <Container
                  id="private-subnet-0"
                  title="private subnet"
                  icon="Private-subnet_32_cyan"
                >
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
                        <Icon id="karpenter" icon="Arch_Amazon-EC2_32_orange" />
                        <Icon id="karpenter" icon="Arch_Amazon-EC2_32_orange" />
                        <Icon id="karpenter" icon="Arch_Amazon-EC2_32_orange" />
                      </div>
                    </Container>
                  </Container>
                </Container>
              </div>
            </Container>
          </Container>
        </div>

        <div className="relative w-md grow-0">
          {data.map((d) => (
            <ArchitectureDoc key={d.id} id={d.id}>
              {d.doc}
            </ArchitectureDoc>
          ))}
        </div>
      </OuterContainer>
    </ScrollStoreProvider>
  );
}
