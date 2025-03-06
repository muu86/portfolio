import { cn } from "@/lib/utils";

type Props = {
  name: string;
  className?: string;
};

export function Keyword({ name, className }: Props) {
  return <span className={cn("text-indigo-700 dark:text-orange-400", className)}>{name}</span>;
}
