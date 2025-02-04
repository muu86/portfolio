import { IndentProps, Tab } from "@/components/highlighting/tab";
import { Brace } from "@/components/highlighting/brace";
import { Children, Fragment, PropsWithChildren } from "react";

type Props = IndentProps & {
  name: string;
  firstLineIndent?: boolean;
  level?: number;
};

export function FunctionCall({ name, firstLineIndent, level = 0, children }: PropsWithChildren<Props>) {
  return (
    <>
      {firstLineIndent && <Tab level={level} />}
      {name}
      <Brace type="(" />
      <br />
      {Children.map(children, (child, index) => (
        <Fragment key={index}>
          <Tab level={level + 1} />
          {child}
          {`,`}
          <br />
        </Fragment>
      ))}
      <Tab level={level} />
      <Brace type=")" />
    </>
  );
}
