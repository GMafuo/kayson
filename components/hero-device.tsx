import { images } from "@/data/site";

export function HeroDevice() {
  return (
    <div className="relative h-[362px] w-full overflow-hidden rounded-[18px] md:overflow-visible">
      <div className="absolute left-0 top-[140px] h-[210px] w-full rounded-[18px] bg-[#96a47c]" />
      <div className="absolute left-1/2 top-0 h-[362px] w-[82%] max-w-[920px] -translate-x-1/2 rounded-[18px] border-[10px] border-black bg-black shadow-[0_18px_40px_rgba(0,0,0,0.22)] md:w-[76%]">
        <div
          className="relative h-full overflow-hidden rounded-[8px] bg-cover bg-center"
          style={{ backgroundImage: `url(${images.heroLandscape})` }}
        >
          <div className="absolute inset-0 bg-[rgba(216,235,241,0.15)]" />
          <div className="absolute left-7 top-8 text-white">
            <p className="text-[10px] opacity-70">Dashboard</p>
            <div className="mt-6 flex items-end gap-5">
              <span className="font-serif text-[46px] leading-none">78%</span>
              <span className="pb-2 text-[15px]">Efficiency Improvements</span>
            </div>
          </div>
          <div className="absolute bottom-12 left-10 right-10 h-px bg-white/35" />
          <div className="absolute bottom-12 left-10 right-10 flex items-end justify-between">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                className="relative w-px bg-white/70"
                key={index}
                style={{ height: `${24 + index * 8}px` }}
              >
                <span className="absolute -left-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-white" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
