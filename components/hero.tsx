import { Block } from "@/components/highlighting/block";
import { Keyword } from "@/components/highlighting/keyword";
import { String } from "@/components/highlighting/string";
import { Variable } from "@/components/highlighting/variable";
import { Assignment } from "@/components/highlighting/assignment";
import { Comment } from "@/components/highlighting/comment";
import { Line } from "@/components/highlighting/layout/line";
import { randomUUID as id } from "node:crypto";
import { Brace } from "@/components/highlighting/brace";

export function Hero() {
  return (
    <main className="relative flex h-[80vh] items-center justify-center">
      <Block className="relative max-w-4xl font-mono text-2xl font-semibold">
        {/*<Line*/}
        {/*  className="mb-16 text-xl"*/}
        {/*  tokens={[<Keyword name="import" key={id()} />, <Variable name="Developer" key={id()} />]}*/}
        {/*/>*/}

        <Line className="text-2xl" tokens={[<Comment key={id()}>println(&ldquo;안녕하세요!&rdquo;)</Comment>]} />
        <Line
          tokens={[
            <Keyword name="val" key={id()} className="text-zinc-500" />,
            <Variable name="iam" key={id()} className="text-zinc-500" />,
            <Assignment key={id()} className="text-zinc-500" />,
            <Keyword name="Developer" key={id()} className="text-zinc-500" />,
            <Brace type="(" key={id()} />,
          ]}
        />
        <Block level={1}>
          <Line
            className="mt-4"
            tokens={[
              <Variable name="name" className="text-zinc-500" key={id()} />,
              <Assignment key={id()} className="text-zinc-500" />,
              <String key={id()}>김민제</String>,
            ]}
          />
          <Line
            className="mt-8 whitespace-nowrap"
            tokens={[
              <Variable name="note" className="text-zinc-500" key={id()} />,
              <Assignment key={id()} className="text-zinc-500" />,
              <String className="text-wrap" key={id()}>
                사람들에게 좋은 서비스를 제공하는 것을 고민합니다. 완성된 서비스를 개발하는 것을 목표로 백엔드, 인프라,
                프론트를 가리지 않고 필요하다면 학습하고 적용합니다.
              </String>,
            ]}
          />
        </Block>
        <Line tokens={[<Brace type=")" key={id()} />]} />
      </Block>
    </main>
  );
}
