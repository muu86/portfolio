import { Children, Fragment, PropsWithChildren } from 'react';
import { Brace } from '@/components/highlighting/brace';
import { Tab } from '@/components/highlighting/tab';

type Props = {
  name: string;
  level?: number;
  firstLineIndent?: boolean;
};

export function ClassInstantiation({ name, level = 0, firstLineIndent, children }: PropsWithChildren<Props>) {
  return (
    <>
      {firstLineIndent && <Tab level={level} />}
      {name}
      <Brace open />
      <br />
      {Children.map(children, (child, index) => (
        <Fragment key={index}>
          <Tab level={level + 1} />
          {child}
        </Fragment>
      ))}
      <Tab level={level} />
      <Brace />
      <br />
    </>
  );
}
