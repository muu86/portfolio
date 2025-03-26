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
      <Block className="relative max-w-5xl font-mono text-4xl font-semibold">
        {/*<Line*/}
        {/*  tokens={[*/}
        {/*    <>*/}
        {/*      <Comment key={id()}>println(</Comment>*/}
        {/*      <String className="font-sans" key={id()}>*/}
        {/*        안녕하세요! 김민제입니다.*/}
        {/*      </String>*/}
        {/*    </>,*/}
        {/*  ]}*/}
        {/*/>*/}
        <Line
          tokens={[
            <Keyword name="val" key={id()} className="text-gray-500" />,
            <Variable name="iam" key={id()} className="text-gray-500" />,
            <Assignment key={id()} className="text-gray-500" />,
            <Keyword name="Developer" key={id()} className="text-gray-500" />,
            <Brace type="(" key={id()} />,
          ]}
        />
        <Block level={1}>
          {/*<Line*/}
          {/*  className="mt-4"*/}
          {/*  tokens={[*/}
          {/*    <Variable name="name" className="text-gray-500" key={id()} />,*/}
          {/*    <Assignment key={id()} className="text-gray-500" />,*/}
          {/*    <String className="font-sans" key={id()}>*/}
          {/*      김민제*/}
          {/*    </String>,*/}
          {/*  ]}*/}
          {/*/>*/}
          <Line
            className="mt-8 whitespace-nowrap"
            tokens={[
              <Variable name="note" className="text-gray-500" key={id()} />,
              <Assignment key={id()} className="text-gray-500" />,
              <String className="font-sans text-pretty" key={id()}>
                좋은 서비스를 만드는 것을 고민합니다. 백엔드, 인프라, 프론트를 가리지 않고 필요하면 학습하고 적용합니다.
              </String>,
            ]}
          />
        </Block>
        <Line tokens={[<Brace type=")" key={id()} />]} />
      </Block>
    </main>
  );
}
