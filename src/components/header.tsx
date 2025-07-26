import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="max-w-[1110px] h-[72px] flex items-center justify-between bg-white mx-auto px-4">
        <Link href="/">
          <Image
            src="/shared/desktop/logo.svg"
            alt="Photosnap logo"
            width={170}
            height={16}
            className=""
          />
        </Link>
        <ul className="flex items-center justify-between gap-x-9">
          <Link href="/stories" className="uppercase font-bold text-[12px] leading-[2px]">Stories</Link>
          <Link href="/features" className="uppercase font-bold text-[12px] leading-[2px]">Features</Link>
          <Link href="/pricing" className="uppercase font-bold text-[12px] leading-[2px]">Pricing</Link>
        </ul>
        <button type="button" className="h-10 bg-black uppercase font-bold text-[12px] leading-[2px] text-white px-6 py-3">Get an invite</button>
      </nav>
    </header>
  );
}