import { Block } from "@/components/highlighting/block";
import { Keyword } from "@/components/highlighting/keyword";
import { String } from "@/components/highlighting/string";
import { Variable } from "@/components/highlighting/variable";
import { Assignment } from "@/components/highlighting/assignment";
import { Line } from "@/components/highlighting/layout/line";
import { randomUUID as id } from "node:crypto";
import { Brace } from "@/components/highlighting/brace";
import Canvas from "@/components/canvas";

export function Hero() {
  return (
    <main className="relative mx-auto flex h-[100vh] w-full max-w-5xl flex-col items-center justify-center gap-8">
      <div className="flex items-center justify-center">
        <Block className="flex w-full grow flex-col font-mono text-4xl font-semibold">
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
            <Line
              className="mt-8 whitespace-nowrap"
              tokens={[
                <Variable name="note" className="text-gray-500" key={id()} />,
                <Assignment key={id()} className="text-gray-500" />,
                <String className="font-sans text-pretty" key={id()}>
                  좋은 서비스를 만드는 것을 고민합니다. 백엔드, 인프라, 프론트를 가리지 않고 필요하면 학습하고
                  적용합니다.
                </String>,
              ]}
            />
            <Line
              className="mt-8 whitespace-nowrap"
              tokens={[
                <Variable name="email" className="text-gray-500" key={id()} />,
                <Assignment key={id()} className="text-gray-500" />,
                <String className="font-sans text-pretty" key={id()}>
                  mu8786@gmail.com
                </String>,
              ]}
            />
          </Block>
          <Line tokens={[<Brace type=")" key={id()} />]} />
        </Block>
      </div>

      <Canvas
        className="-z-10 max-w-xl basis-1/3"
        pov={30}
        camPos={[0, 1.0, 2.0]}
        camLook={[0, 0.92, 0]}
        isAnimating={false}
      />
    </main>
  );
}
