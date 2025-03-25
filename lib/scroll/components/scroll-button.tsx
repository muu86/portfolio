import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  direction?: "up" | "down";
};

export function ScrollButton({ direction }: Props) {
  return (
    // <Link href={href}>
    <div
      className={cn("absolute left-1/2 z-10 cursor-pointer text-gray-400 hover:scale-110 hover:text-black", {
        "top-2/12": direction === "up",
        "bottom-2/12": direction === "down",
      })}
    >
      {direction === "down" ? <ChevronDown /> : <ChevronUp />}
    </div>
    // </Link>
  );
}
