type Props = {
  className?: string;
};

export function Assignment({ className }: Props) {
  return <span className={className}>{`=`}</span>;
}
