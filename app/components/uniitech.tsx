import { Title } from "@/components/project/title";
import { Left } from "@/lib/scroll/components/left";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { uniitechDocs } from "@/docs/docs-2";
import { readDocs } from "@/lib/utils";
import { ScrollContainer } from "@/lib/scroll/components/scroll-container";

export async function Uniitech() {
  const data = await readDocs(uniitechDocs);
  return (
    <ScrollStoreProvider ids={data.map((d) => d.id)}>
      <ScrollContainer>
        <Title>
          <h2 className="text-sm text-gray-500">유니아이텍</h2>
          <h3 className="text-xl font-bold">SI 프로젝트 수행</h3>
        </Title>
        <div className="flex w-full gap-8 px-16">
          <Left>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="flex items-stretch justify-center gap-20">
                {data.map((d) => (
                  <div className="grow basis-1 rounded-md p-8 shadow-md" key={d.id}>
                    {d.doc}
                  </div>
                ))}
              </div>
            </div>
          </Left>
        </div>
      </ScrollContainer>
    </ScrollStoreProvider>
  );
}
