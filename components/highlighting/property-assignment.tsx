import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Props = ComponentPropsWithoutRef<"span"> & {
  param: string;
  className?: string;
};

export function PropertyAssignment({ param, className, children }: Props) {
  return (
    <>
      <span className={clsx("text-fuchsia-600 dark:text-cyan-400", className)}>
        {param}
        {` = `}
      </span>
      {children}
      {`,`}
      <br />
    </>
  );
}
