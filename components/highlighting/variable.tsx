type Props = {
  name: string;
  className?: string;
};

export function Variable({ name, className }: Props) {
  return <span className={className}>{name}</span>;
}
