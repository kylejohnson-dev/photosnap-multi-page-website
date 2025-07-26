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
          <Link href="/stories">Stories</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
        </ul>
        <button type="button" className="bg-black text-white px-20 py-3">Get an invite</button>
      </nav>
    </header>
  );
}