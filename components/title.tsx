import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <div className="mb-16 border-t-2 border-t-black py-4">
      <h1 className="text-2xl font-bold">{children}</h1>
    </div>
  );
}
