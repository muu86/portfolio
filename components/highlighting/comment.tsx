import { ComponentProps, ComponentPropsWithoutRef, FunctionComponent, ReactElement } from 'react';
import clsx from 'clsx';

type Props = ComponentPropsWithoutRef<'span'> & {
  className?: string;
  children?: string | ReactElement<ComponentPropsWithoutRef<'span'>, FunctionComponent<ComponentProps<'span'>>>;
};

export function Comment({ className, children }: Props) {
  return (
    <>
      <span className={clsx('text-gray-400', className)}>
        {`// `}
        {children}
      </span>
      <br />
    </>
  );
}
