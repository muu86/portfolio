import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = {
  level?: number;
  className?: string;
};

export function Block({ level = 0, className, children }: PropsWithChildren<Props>) {
  return (
    <div
      className={clsx(
        {
          'ml-0': level === 0,
          'ml-8': level === 1,
          'ml-16': level === 2,
          'ml-24': level === 3,
          'ml-32': level === 4,
          'ml-40': level === 5,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
