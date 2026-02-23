export function Button({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <button className={`bg-[#3dd68c] border-[#b1f1cb] border-b-[3px] border-r-[3px] rounded-[24px] h-[52px] px-9 py-5 flex items-center justify-center gap-2 font-bebas-neue text-2xl text-[#121b17] ${className}`}>
      {children}
    </button>
  );
}