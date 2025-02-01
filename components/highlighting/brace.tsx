export type BraceType = '{' | '}' | '[' | ']' | '(' | ')' | '{}' | '[]' | '()';

type Props = {
  type?: BraceType;
};

export function Brace({ type = '{' }: Props) {
  return <span>{type}</span>;
}
