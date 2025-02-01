export type IndentProps = {
  level?: number;
};

export function Tab({ level = 0 }: IndentProps) {
  return <>{' '.repeat(level * 2)}</>;
}
