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
    <main className="mt-20 px-4">
      {/*<div className="flex aspect-square h-16 -scale-x-100 items-center justify-center overflow-hidden rounded-full outline-1">*/}
      {/*  <Image*/}
      {/*    className="shadow-xl"*/}
      {/*    src={ProfileImage}*/}
      {/*    alt="hand-drawn picture by my wife"*/}
      {/*    width={512}*/}
      {/*    height={512}*/}
      {/*    priority*/}
      {/*  />*/}
      {/*</div>*/}
      <div>
        <Block className="font-mono text-4xl font-semibold">
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
                <String className="text-5xl" key={id()}>
                  김민제
                </String>,
              ]}
            />
            <Line
              className="mt-8 whitespace-nowrap"
              tokens={[
                <Variable name="note" className="text-zinc-500" key={id()} />,
                <Assignment key={id()} className="text-zinc-500" />,
                <String className="text-5xl" key={id()}>
                  엠제이라고 합니다.
                </String>,
              ]}
            />
          </Block>
          <Line tokens={[<Brace type=")" key={id()} />]} />
        </Block>
      </div>
    </main>
  );
}
