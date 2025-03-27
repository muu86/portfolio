import { Title } from "@/lib/scroll/components/title";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { ScrollContainer } from "@/lib/scroll/components/scroll-container";
import { ScrollInnerContainer } from "@/lib/scroll/components/scroll-inner-container";
import { myComponents } from "@/mdx-components";
import Link from "next/link";
import { allUniiteches } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";

export async function Uniitech() {
  const docs = allUniiteches.sort((a, b) => a.order - b.order);

  return (
    <ScrollStoreProvider ids={docs.map((doc) => doc.id)}>
      <ScrollContainer>
        <Title>
          <h2 className="text-xl text-gray-400">유니아이텍</h2>
          <h3 className="text-2xl font-bold">
            <Link className="cursor-pointer underline" href="https://www.hnsmall.com" target="_blank">
              홈앤쇼핑
            </Link>{" "}
            SI 프로젝트 수행
          </h3>
        </Title>
        <ScrollInnerContainer>
          <div className="mt-[160px] flex min-h-[calc(100svh-80px)] w-full flex-col justify-around">
            {docs.map((doc) => (
              <div className="flex flex-col items-start justify-center" key={doc.id}>
                <MDXContent code={doc.mdx} components={myComponents} />
              </div>
            ))}
          </div>
        </ScrollInnerContainer>
      </ScrollContainer>
    </ScrollStoreProvider>
  );
}
