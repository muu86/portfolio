import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function SectionContainer({ className, children }: PropsWithChildren<Props>) {
  return <section className={cn("mx-auto w-full max-w-5xl", className)}>{children}</section>;
}
