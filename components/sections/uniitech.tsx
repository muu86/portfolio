import { Title } from "@/lib/scroll/components/title";
import { ScrollContainer } from "@/lib/scroll/components/scroll-container";
import { ScrollInnerContainer } from "@/lib/scroll/components/scroll-inner-container";
import { myComponents } from "@/mdx-components";
import { allUniiteches } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { HTMLAttributes } from "react";

export async function Uniitech() {
  const docs = allUniiteches.sort((a, b) => a.order - b.order);

  return (
    <ScrollContainer>
      <Title>
        <h2 className="text-xl text-gray-400">유니아이텍</h2>
        <h3 className="text-2xl font-bold">
          <a className="underline" href="https://www.hnsmall.com" target="_blank" rel="noopener noreferrer">
            홈앤쇼핑
          </a>{" "}
          SI 프로젝트 수행
        </h3>
      </Title>
      <ScrollInnerContainer>
        <div className="z-40 mt-32 flex w-full flex-col justify-around gap-8 py-8">
          {docs.map((doc, index) => (
            <>
              <div className="flex flex-col items-start justify-center" key={doc.id}>
                <MDXContent
                  code={doc.mdx}
                  components={{
                    ...myComponents,
                    h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
                      <h2
                        className={cn(
                          "font-heading mt-12 scroll-m-30 text-2xl font-bold tracking-tight first:mt-0",
                          className,
                        )}
                        {...props}
                      />
                    ),
                  }}
                />
              </div>
              {index < docs.length - 1 && <Separator />}
            </>
          ))}
        </div>
      </ScrollInnerContainer>
    </ScrollContainer>
  );
}
