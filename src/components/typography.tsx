import { JSX, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  variant?: "h2" | "h3" | "p";
  className?: string;
}

export default function Typography({ variant = "p", className, children }: Props) {
  const Tag: keyof JSX.IntrinsicElements = variant;

  const typographyVariants = {
    // h1: "text-4xl font-bold",
    h2: "uppercase font-bold text-[40px] leading-12 tracking-[4.17px]",
    h3: "text-2xl font-medium",
    p: "font-normal text-[15px] leading-[25px] tracking-normal",
  }

  return (
    <Tag className={`${typographyVariants[variant]} ${className} font-[family:var(--font-dm-sans)]`}>
      {children}
    </Tag>
    );
}