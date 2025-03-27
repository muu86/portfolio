import { Fragment, ReactNode } from "react";
import clsx from "clsx";
import { randomUUID } from "node:crypto";

type Props = {
  tokens: ReactNode[];
  className?: string;
};

export function Line({ tokens, className }: Props) {
  return (
    <p className={clsx("ml-28 -indent-28 leading-loose", className)}>
      {tokens.map(
        (token, index) =>
          (index < tokens.length - 1 && <Fragment key={randomUUID()}>{token}&nbsp;</Fragment>) || (
            <Fragment key={randomUUID()}>{token}</Fragment>
          ),
      )}
    </p>
  );
}
