import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1e160f] border-b-2 border-r-6 border-[#a35829] rounded-[12px] h-[72px] px-6 py-3 w-full max-w-[1000px] flex items-center justify-between">
      <div className="h-11 w-11 relative">
        <Image
          src="/images/logo.png"
          alt="Verge Logo"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center gap-4 flex-1 justify-between">
        <div className="flex items-center h-full gap-4 ml-8">
          <Link href="#home" className="px-4 py-2 text-sm text-[#eee] font-montserrat">
            Home
          </Link>
          <Link href="#about" className="px-4 py-2 text-sm text-[#eee] font-montserrat">
            About
          </Link>
          <Link href="#tokenomics" className="px-4 py-2 text-sm text-[#eee] font-montserrat">
            Tokenomics
          </Link>
          <Link href="#roadmap" className="px-4 py-2 text-sm text-[#eee] font-montserrat">
            Roadmap
          </Link>
        </div>

        <button className="bg-[#ffa057] border-[#ffe0c2] border-b border-r-4 rounded-[12px] h-[51px] px-6 py-5 flex items-center justify-center gap-2 font-rubik font-extrabold text-base text-[#17120e]">
          Buy now
        </button>
      </div>
    </nav>
  );
}
