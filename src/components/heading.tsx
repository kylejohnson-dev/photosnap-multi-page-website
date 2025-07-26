import { PropsWithChildren } from "react";

export default function Heading({ children }: PropsWithChildren) {
  return (
    <h2 className="uppercase font-bold text-[40px] leading-12 tracking-[4.17px]">
      {children}
    </h2>
  );
}