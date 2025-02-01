import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type Props = ComponentPropsWithoutRef<'span'> & {
  className?: string;
  children?: string;
};

export function String({ className, children }: Props) {
  return (
    <>
      {/*<span className={cn('text-gray-400 text-xl', className)}>“</span>*/}
      <span className={cn('text-gray-700 dark:text-gray-50 font-bold text-xl', className)}>{children}</span>
      {/*<span className={cn('text-gray-400 text-xl', className)}>”</span>*/}
    </>
  );
}
