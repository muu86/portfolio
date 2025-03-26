import { Title } from "@/lib/scroll/components/title";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { uniitechDocs } from "@/docs/docs";
import { cn, readDocs } from "@/lib/utils";
import { ScrollContainer } from "@/lib/scroll/components/scroll-container";
import { ScrollInnerContainer } from "@/lib/scroll/components/scroll-inner-container";
import { myComponents } from "@/mdx-components";
import { HTMLAttributes } from "react";
import Link from "next/link";

export async function Uniitech() {
  const data = await readDocs(uniitechDocs, {
    ...myComponents,
    h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "font-heading mt-12 scroll-m-30 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0",
          className,
        )}
        {...props}
      />
    ),
  });

  return (
    <ScrollStoreProvider ids={data.map((d) => d.id)}>
      <ScrollContainer>
        <Title>
          <h2 className="text-sm text-gray-500">유니아이텍</h2>
          <h3 className="text-xl font-bold">
            <Link className="cursor-pointer underline" href="https://www.hnsmall.com" target="_blank">
              홈앤쇼핑
            </Link>{" "}
            SI 프로젝트 수행
          </h3>
        </Title>
        <ScrollInnerContainer>
          <div className="mt-[160px] flex min-h-[calc(100svh-80px)] w-full flex-col justify-around">
            {data.map((d) => (
              <div className="flex flex-col items-start justify-center" key={d.id}>
                {d.doc}
              </div>
            ))}
          </div>
        </ScrollInnerContainer>
      </ScrollContainer>
    </ScrollStoreProvider>
  );
}
