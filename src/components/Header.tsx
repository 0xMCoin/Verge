"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1e160f] border-b-2 border-r-6 border-[#a35829] rounded-[12px] h-[60px] md:h-[72px] px-3 md:px-6 py-2 md:py-3 w-[95%] md:w-full max-w-[1000px] flex items-center justify-between">
      <div className="h-8 w-8 md:h-11 md:w-11 relative">
        <Image
          src="/images/logo.png"
          alt="Verge Logo"
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 flex-1 justify-between">
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

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-[#ffa057] border-[#ffe0c2] border-b border-r-4 rounded-[12px] h-[40px] px-4 flex items-center justify-center font-rubik font-extrabold text-sm text-[#17120e]"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1e160f] border-2 border-[#a35829] rounded-[12px] p-4 flex flex-col gap-2">
          <Link href="#home" className="px-4 py-2 text-sm text-[#eee] font-montserrat" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="px-4 py-2 text-sm text-[#eee] font-montserrat" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="#tokenomics" className="px-4 py-2 text-sm text-[#eee] font-montserrat" onClick={() => setIsMenuOpen(false)}>
            Tokenomics
          </Link>
          <Link href="#roadmap" className="px-4 py-2 text-sm text-[#eee] font-montserrat" onClick={() => setIsMenuOpen(false)}>
            Roadmap
          </Link>
        </div>
      )}
    </nav>
  );
}
