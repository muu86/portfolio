import clsx from 'clsx';

type Props = {
  name: string;
  className?: string;
};

export function Keyword({ name, className }: Props) {
  return <span className={clsx('text-indigo-700 dark:text-orange-400', className)}>{name}</span>;
}
