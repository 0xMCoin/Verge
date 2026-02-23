export function MissionIcon() {
  return (
    <div className="h-5 w-[20.625px] relative shrink-0">
      {/* Combined icon - simplified version using the vector and group SVGs */}
      <div className="absolute inset-0">
        <img
          src="/images/icon-vector.svg"
          alt=""
          className="absolute inset-[6.3%_4.02%_6.09%_3.23%] block max-w-none w-full h-full"
        />
        <img
          src="/images/icon-group.svg"
          alt=""
          className="absolute inset-[26.66%_4.02%_6.09%_3.23%] block max-w-none w-full h-full mix-blend-multiply"
        />
      </div>
    </div>
  );
}
