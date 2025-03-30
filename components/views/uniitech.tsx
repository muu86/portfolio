import { ProjectTitle } from "@/components/project/project-title";
import { ProjectContainer } from "@/components/project/project-container";
import { myComponents } from "@/mdx-components";
import { allUniiteches } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { ScrollNav } from "@/lib/scroll/components/scroll-nav";
import { ScrollSelector } from "@/lib/scroll/components/scroll-selector";
import { ProjectGridContainer } from "@/components/project/project-grid-container";
import { ProjectLeft } from "@/components/project/project-left";
import { ProjectRight } from "@/components/project/project-right";
import { ScrollItem } from "@/lib/scroll/components/scroll-item";
import { ArchitectureDoc } from "@/components/project/doc";
import Canvas from "@/components/canvas";

export async function Uniitech() {
  const docs = allUniiteches.sort((a, b) => a.order - b.order);

  return (
    <ProjectContainer>
      <ProjectTitle>
        <h2 className="text-xl text-gray-400">유니아이텍</h2>
        <h3 className="text-2xl font-bold">
          <a className="underline" href="https://www.hnsmall.com" target="_blank" rel="noopener noreferrer">
            홈앤쇼핑
          </a>{" "}
          SI 프로젝트 수행
        </h3>
      </ProjectTitle>

      <ScrollNav>
        {docs.map((doc) => (
          <ScrollSelector key={doc.id} id={doc.id} title={doc.title} />
        ))}
      </ScrollNav>
      <ProjectGridContainer>
        <ProjectLeft>
          <Canvas camPos={[1.0, 1.5, 0]} camLook={[0, 0, 0]} />
        </ProjectLeft>
        <ProjectRight>
          {docs.map((doc) => (
            <ScrollItem key={doc.id} id={doc.id}>
              <ArchitectureDoc id={doc.id}>
                <MDXContent code={doc.mdx} components={myComponents} />
              </ArchitectureDoc>
            </ScrollItem>
          ))}
          {/*<div className="h-full">*/}
          {/*  <div className="z-40 flex w-full flex-col justify-around gap-8 py-8 pt-60">*/}
          {/*    {docs.map((doc, index) => (*/}
          {/*      <Fragment key={doc.id}>*/}
          {/*        <div className="flex flex-col items-start justify-center" key={doc.id}>*/}
          {/*          <MDXContent*/}
          {/*            code={doc.mdx}*/}
          {/*            components={{*/}
          {/*              ...myComponents,*/}
          {/*              h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (*/}
          {/*                <h2*/}
          {/*                  className={cn(*/}
          {/*                    "font-heading mt-12 scroll-m-30 text-2xl font-bold tracking-tight first:mt-0",*/}
          {/*                    className,*/}
          {/*                  )}*/}
          {/*                  {...props}*/}
          {/*                />*/}
          {/*              ),*/}
          {/*            }}*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*        {index < docs.length - 1 && <Separator />}*/}
          {/*      </Fragment>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</div>*/}
        </ProjectRight>
      </ProjectGridContainer>
    </ProjectContainer>
  );
}
