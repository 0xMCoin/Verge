import { TelegramIcon } from "@/components/TelegramIcon";
import { Spotlight } from "@/components/ui/spotlight";
import { TwitterIcon } from "@/components/Icons/TwitterIcon";

import Image from "next/image";
import { InstagramIcon } from "@/components/Icons/InstagramIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full bg-[#121b17] min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative border-b-4 md:border-b-8 border-[#33b074] rounded-bl-[32px] md:rounded-bl-[64px] rounded-br-[32px] md:rounded-br-[64px] pb-[120px] md:pb-[322px] pt-[100px] md:pt-[132px] px-4 md:px-[124px] overflow-hidden bg-[url('/images/bg-hero.png')] bg-cover bg-center">
        <Spotlight />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col gap-6 md:gap-10 items-center justify-center w-full max-w-[648px] mx-auto">
          {/* Title with rotation */}
          <div className="flex flex-col gap-3 md:gap-4 items-center">
            <div className="rotate-[2deg] md:rotate-[3.7deg] z-50">
              <div className="bg-[#433500] border-[#ffff57] border-b-2 border-l-4 rounded-[12px] px-4 md:px-10 py-3 md:py-5">
                <p className="font-rubik font-bold text-[28px] md:text-[44px] leading-[1.04] text-[#ffe629] text-center">
                  $Verge
                </p>
              </div>
            </div>

            <div className="rotate-[-1.5deg] md:rotate-[-2.79deg] -mt-4 md:-mt-8">
              <div className="bg-[#3dd68c] border-[#b1f1cb] border-b-4 border-l-8 rounded-[12px] px-4 md:px-10 py-6 md:py-9 w-auto">
                <h1 className="font-rubik font-bold text-[32px] md:text-[60px] leading-[1.04] text-[#113b29] text-center w-max">
                  Riches or Ruin. Pick one.
                </h1>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-2 items-stretch md:items-end justify-center w-full md:w-[350px]">
            <button className="bg-[#ffa057] border-[#ffe0c2] cursor-pointer hover:bg-[#ffb957] border-b border-r-4 rounded-[12px] w-full py-3 px-6 flex items-center justify-center gap-2 font-rubik font-extrabold text-sm md:text-base text-[#17120e]">
              Buy now
            </button>
            <button className="bg-[#eee] border-[#eee] cursor-pointer hover:bg-[#ddd] border-r-3 rounded-[12px] w-full py-3 px-6 flex items-center justify-center gap-2 font-rubik font-extrabold text-sm md:text-base text-[#111]">
              View chart
            </button>
          </div>
        </div>

        <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 mt-20 size-60 bg-[url('/images/planet2.png')] bg-cover bg-center animate-[spin_60s_linear_infinite]" />
        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 -mt-40 size-60 bg-[url('/images/planet1.png')] bg-cover bg-center animate-[spin_60s_linear_infinite]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-3/5 h-[40%] md:h-3/5 bg-[url('/images/hero.png')] bg-cover bg-center" />
      </section>

      {/* The Eternal PvP Section */}
      <section id="about" className="relative flex flex-col gap-8 md:gap-16 items-center justify-center p-4 md:p-[124px]">
        <div className="hidden md:block bg-[#3dd68c] blur-[400px] opacity-40 w-[552px] h-[552px] rounded-full absolute top-10 left-10" />
        <div className="hidden md:block bg-[#3dd68c] blur-[400px] w-[552px] h-[552px] rounded-full absolute mt-[10%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="flex flex-col gap-6 md:gap-11 items-center w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 md:gap-4 items-center w-full">
            <div className="rotate-[-1.5deg] md:rotate-[-2.59deg] z-10">
              <div className="bg-[#562800] border-[#ff801f] border-b-2 border-l-4 rounded-[12px] px-4 md:px-10 py-4 md:py-8">
                <p className="font-rubik font-bold text-[28px] md:text-[44px] leading-[1.04] text-[#ffa057] text-center">
                  The Eternal PvP
                </p>
              </div>
            </div>
            <div className="rotate-[1deg] md:rotate-[2.17deg] -mt-2 md:-mt-4">
              <div className="bg-[#3dd68c] border-[#b1f1cb] border-b-4 border-l-8 rounded-[12px] px-4 md:px-10 py-6 md:py-9 w-full md:w-[934px]">
                <h2 className="font-rubik font-bold text-[24px] md:text-[44px] leading-[1.04] text-[#113b29] text-center whitespace-pre-wrap">
                  Survival isn't promised. It's earned.
                </h2>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center pb-[100px] md:pb-[229px] gap-6 md:gap-0 relative w-full">
            {/* The Bulls Card */}
            <div className="flex items-center justify-center relative w-full md:w-auto">
              <div className="rotate-[-2deg] md:rotate-[-5.32deg]">
                <div className="bg-[#eee] border-[#b4b4b4] border-b-4 border-l-8 rounded-[12px] flex flex-col gap-4 md:gap-6 items-center justify-center px-6 md:px-10 py-6 md:py-9 w-full md:w-auto">
                  <h3 className="font-rubik font-bold text-[32px] md:text-[44px] leading-[1.04] text-[#113b29] w-full">
                    The Bulls
                  </h3>
                  <div className="bg-[#3a3a3a] h-[2px] w-full" />
                  <p className="font-rubik font-medium text-base md:text-xl leading-[1.04] text-[#191919] w-full whitespace-pre-wrap">
                    Diamond-handed chads who eat dips for breakfast. They know every sell from a weak-handed bear is just more SOL in their own pockets. They stack while the world burns.
                  </p>
                </div>
              </div>
            </div>

            {/* The Bears Card */}
            <div className="flex flex-col items-center md:items-end justify-center relative w-full md:w-auto">
              <div className="flex items-center justify-center relative w-full md:w-auto">
                <div className="rotate-[2deg] md:rotate-[5.5deg]">
                  <div className="bg-[#eee] border-[#b4b4b4] border-b-4 border-l-8 rounded-[12px] flex flex-col gap-4 md:gap-6 items-center justify-center px-6 md:px-10 py-6 md:py-9 w-full md:w-auto">
                    <h3 className="font-rubik font-bold text-[32px] md:text-[44px] leading-[1.04] text-[#113b29] w-full">
                      The Bears
                    </h3>
                    <div className="bg-[#3a3a3a] h-[2px] w-full" />
                    <p className="font-rubik font-medium text-base md:text-xl leading-[1.04] text-[#191919] w-full whitespace-pre-wrap">
                      Doom-scrolling cowards. They're the exit liquidity. They sell because they're scared, paying the 1,5% coward tax that goes straight to the Bulls. Stay poor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="bg-[url('/images/meme1.png')] bg-cover bg-center h-[300px] md:h-[565px] w-full md:w-[1192px] rounded-[16px] md:rounded-[32px] relative overflow-hidden" />
      </section>

      {/* THIS IS $VERGE Section */}
      <div className="relative">
        <div className="bg-[url('/images/bg-section3.png')] bg-contain bg-no-repeat bg-center absolute top-0 left-0 w-full h-full opacity-50 md:opacity-100" />

        <section className="relative flex flex-col items-center justify-center p-4 md:p-[124px] pt-0">
          <div className="hidden md:block bg-[#3dd68c] blur-[400px] w-[552px] h-[552px] rounded-full absolute mt-[10%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="flex flex-col gap-6 md:gap-11 min-h-[500px] md:h-[726px] items-center justify-end relative w-full">
            {/* Title */}
            <div className="flex flex-col gap-3 md:gap-4 items-center w-full">
              <div className="bg-[#562800] border-[#ff801f] border-b-2 border-l-4 rounded-[12px] px-4 md:px-10 py-4 md:py-8 rotate-[1deg] md:rotate-[2.25deg] z-10">
                <p className="font-rubik font-bold text-[24px] md:text-[44px] leading-[1.04] text-[#ffa057] text-center">
                  THIS IS $VERGE
                </p>
              </div>
              <div className="bg-[#3dd68c] border-[#b1f1cb] border-b-4 border-l-8 rounded-[12px] flex min-h-[200px] md:h-[377px] items-center justify-center px-4 md:px-10 py-6 md:py-9 w-full md:w-[1145px] rotate-[-1.5deg] md:rotate-[-2.7deg] -mt-4 md:-mt-8">
                <div className="font-rubik font-bold text-[20px] md:text-[44px] leading-[1.04] text-[#113b29] whitespace-pre-wrap text-center md:text-left">
                  <p className="mb-0">Built on Solana. Whether you live on-chain or just got here.</p>
                  <p>
                    <br />
                    We're here to survive the edge and come out with more SOL than we started with. Conviction is the only utility that matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="absolute top-16 md:top-32 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-[200px] h-[200px] md:w-[356px] md:h-[356px]">
              <div className="bg-[url('/images/meme2.png')] bg-cover bg-center rounded-[16px] md:rounded-[32px] w-full h-full relative overflow-hidden" />
            </div>
          </div>
        </section>

        {/* Coinbarrel Section */}
        <section className="relative flex flex-col gap-8 md:gap-16 items-center justify-center p-4 md:p-[124px]">
          {/* Background image placeholder */}
          <div className="hidden md:block absolute left-1/2 top-[calc(50%-299px)] -translate-x-1/2 -translate-y-1/2 w-[664px] h-[473px]">
            <div className="rotate-[-2.2deg]">
              <div className="bg-[url('/images/meme3.png')] bg-cover bg-center h-[449px] w-[648px] relative overflow-hidden" />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-11 min-h-[800px] md:h-[1071px] items-center justify-end relative w-full">
            {/* Title */}
            <div className="flex flex-col gap-3 md:gap-4 items-center w-full">
              <div className="rotate-[-0.2deg] md:rotate-[-0.3deg]">
                <div className="bg-[#562800] border-[#ff801f] border-b-2 border-l-4 rounded-[12px] px-4 md:px-10 py-3 md:py-5">
                  <p className="font-rubik font-bold text-[24px] md:text-[44px] leading-[1.04] text-[#ffa057] text-center">
                    Coinbarrel: Hank's New Playground
                  </p>
                </div>
              </div>
              <p className="font-rubik font-medium text-lg md:text-[28px] leading-[1.04] text-[#eee] mt-4 md:mt-10 text-center">
                Built for the chaos of the trenches.
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center pb-[100px] md:pb-[246px] gap-6 md:gap-0 relative w-full">
              {/* Fees Belong to the Holders */}
              <div className="flex items-center justify-center relative w-full md:w-auto">
                <div className="bg-[#eee] border-[#b4b4b4] border-b-4 border-l-8 rounded-[12px] flex flex-col gap-4 md:gap-6 items-center justify-center px-6 md:px-10 py-6 md:py-9 rotate-[1.5deg] md:rotate-[3.23deg] w-full md:w-max">
                  <h3 className="font-rubik font-bold text-[28px] md:text-[44px] leading-[1.04] text-[#113b29] w-full text-center">
                    Fees Belong to the <br /> Holders
                  </h3>
                  <div className="bg-[#3a3a3a] h-[2px] w-full" />
                  <p className="font-rubik font-medium text-base md:text-xl leading-[1.04] text-[#191919] w-full whitespace-pre-wrap">
                    100% of every tax flows straight back to the community.
                  </p>
                </div>
              </div>

              {/* AUTOMATIC SOL REWARDS */}
              <div className="flex flex-col items-center md:items-end justify-center relative w-full md:w-auto">
                <div className="flex items-center justify-center relative w-full md:w-auto">
                  <div className="bg-[#eee] border-[#b4b4b4] border-b-4 border-l-8 rounded-[12px] flex flex-col gap-4 md:gap-6 items-center justify-center px-6 md:px-10 py-6 md:py-9 w-full md:w-[566px] rotate-[-4deg] md:rotate-[-8.94deg]">
                    <h3 className="font-rubik font-bold text-[24px] md:text-[36px] leading-[1.04] text-[#113b29] w-full text-center">
                      AUTOMATIC SOL REWARDS
                    </h3>
                    <div className="bg-[#3a3a3a] h-[2px] w-full" />
                    <p className="font-rubik font-medium text-base md:text-xl leading-[1.04] text-[#191919] w-full whitespace-pre-wrap">
                      Hold $VERGE, get SOL. No staking, no claiming, no bullshit.
                      <br />
                      <br />
                      Pure Solana landing in your wallet because some bear decided to sell. Passive income for chads.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom text */}
            <div className="flex items-center justify-center relative w-full md:w-[959px]">
              <div className="rotate-[-0.2deg] md:rotate-[-0.3deg]">
                <div className="bg-[#3dd68c] border-[#b1f1cb] border-b-4 border-l-8 rounded-[12px] flex min-h-[60px] md:h-[78px] items-center justify-center px-4 md:px-10 py-4 md:py-9 w-full md:w-[959px]">
                  <p className="font-rubik font-bold text-[18px] md:text-[28px] leading-[1.04] text-[#113b29] text-center">
                    Coinbarrel's tech thrives in chaos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* The 1.5% Tax Section */}
      <section className="relative flex flex-col items-center justify-center p-4 md:p-[124px]">
        <div className="hidden md:block bg-[#3dd68c] blur-[400px] opacity-40 w-[552px] h-[552px] rounded-full absolute top-10 left-10" />
        <div className="flex flex-col gap-6 md:gap-11 min-h-[600px] md:h-[769px] items-center relative w-full">
          {/* Title */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center w-full">

            <div className="rotate-[-2deg] md:rotate-[-3.35deg]">
              <div className="bg-[#562800] border-[#ff801f] border-b-2 border-l-4 rounded-[12px] flex min-h-[70px] md:h-[95px] items-center justify-center px-4 md:px-10 py-4 md:py-8">
                <p className="font-rubik font-bold text-[20px] md:text-[44px] leading-[1.04] text-[#ffa057] text-center">
                  The 1,5% Tax: Feed the bulls
                </p>
              </div>
            </div>

            <div className="rotate-[3deg] md:rotate-[6.62deg]">
              <div className="bg-[#3dd68c] border-[#b1f1cb] border-b-4 border-l-8 rounded-[12px] flex flex-col items-start justify-center px-4 md:px-6 py-3 md:py-4">
                <p className="font-rubik font-bold text-[36px] md:text-[64px] leading-[1.04] text-[#113b29]">
                  1,5% Tax
                </p>
                <p className="font-rubik font-bold text-[18px] md:text-[28px] leading-[1.04] text-[#113b29]">
                  On every buy & sell
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col items-center justify-center pb-[100px] md:pb-[257px] gap-6 md:gap-0 relative w-full">
            {/* Tipping the chads */}
            <div className="flex items-center justify-center w-full md:w-auto">
              <div className="flex items-center justify-center relative w-full md:w-[647px]">
                <div className="rotate-[2deg] md:rotate-[5.95deg]">
                  <div className="bg-[#eee] border-[#b4b4b4] border-b-4 border-l-8 rounded-[12px] flex flex-col gap-4 md:gap-6 items-center justify-center px-6 md:px-10 py-6 md:py-9 w-full md:w-[629px]">
                    <h3 className="font-rubik font-bold text-[28px] md:text-[44px] leading-[1.04] text-[#113b29] w-full text-center md:text-left">
                      Tipping the chads
                    </h3>
                    <div className="bg-[#3a3a3a] h-[2px] w-full" />
                    <p className="font-rubik font-medium text-base md:text-xl leading-[1.04] text-[#191919] w-full whitespace-pre-wrap">
                      Every time a Bear panics and hits sell, they're essentially tipping you in Solana. More volume = more SOL in your wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kill the PVP */}
            <div className="flex flex-col items-center md:items-end justify-center relative w-full md:w-auto">
              <div className="flex items-center justify-center relative w-full md:w-[584px]">
                <div className="rotate-[2deg] md:rotate-[5.86deg]">
                  <div className="bg-[#eee] border-[#b4b4b4] border-b-4 border-l-8 rounded-[12px] flex flex-col gap-4 md:gap-6 items-center justify-center px-6 md:px-10 py-6 md:py-9 w-full md:w-[566px]">
                    <h3 className="font-rubik font-bold text-[24px] md:text-[36px] leading-[1.04] text-[#113b29] w-full text-center md:text-left">
                      Kill the PVP
                    </h3>
                    <div className="bg-[#3a3a3a] h-[2px] w-full" />
                    <p className="font-rubik font-medium text-base md:text-xl leading-[1.04] text-[#191919] w-full whitespace-pre-wrap">
                      The tax rewards the ones who actually stay in the trenches. We don't want quick flips; we want more SOL.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="absolute bottom-10 md:bottom-20 right-1/2 translate-x-1/2 md:-mr-20 w-[200px] h-[200px] md:w-[318px] md:h-[318px]">
            <div className="w-full h-full relative overflow-hidden bg-[url('/images/meme4.png')] bg-cover bg-center rounded-[16px] md:rounded-none" />
          </div>
        </div>
      </section>

      {/* Bull or Bear? Section */}
      <section className="relative flex flex-col gap-6 md:gap-11 items-center justify-center p-4 md:p-[124px] pt-0">
        <div className="flex flex-col gap-6 md:gap-11 items-center relative w-full">
          {/* Title */}
          <div className="rotate-[2deg] md:rotate-[3.35deg]">
            <div className="bg-[#562800] border-[#ff801f] border-b-4 border-l-4 rounded-[12px] px-4 md:px-10 py-4 md:py-8">
              <p className="font-rubik font-bold text-[28px] md:text-[44px] leading-[1.04] text-[#ffa057] text-center">
                Bull or Bear?
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col items-center md:items-start pb-[80px] md:pb-[191px] gap-6 md:gap-0 relative w-full md:w-[584px]">
            {/* Bulls */}
            <div className="flex items-center justify-center relative w-full md:w-[378px]">
              <div className="rotate-[-2deg] md:rotate-[-5.13deg]">
                <div className="bg-[#eee] border-[#b4b4b4] border-b-4 border-l-8 rounded-[12px] flex flex-col gap-4 md:gap-6 items-center justify-center px-6 md:px-10 py-6 md:py-9 w-full md:w-[365px]">
                  <h3 className="font-rubik font-bold text-[32px] md:text-[44px] leading-[1.04] text-[#113b29] w-full text-center md:text-left">
                    Bulls
                  </h3>
                  <div className="bg-[#3a3a3a] h-[2px] w-full" />
                  <p className="font-rubik font-medium text-lg md:text-xl leading-[1.04] text-[#191919] w-full text-center md:text-left">
                    Stack sol & Thrive
                  </p>
                </div>
              </div>
            </div>

            {/* Bears */}
            <div className="flex flex-col items-center md:items-end justify-center relative w-full md:w-auto">
              <div className="flex items-center justify-center relative w-full md:w-[343px]">
                <div className="rotate-[2deg] md:rotate-[5.86deg]">
                  <div className="bg-[#eee] border-[#b4b4b4] border-b-4 border-l-8 rounded-[12px] flex flex-col gap-4 md:gap-6 items-center justify-center px-6 md:px-10 py-6 md:py-9 w-full md:w-[328px]">
                    <h3 className="font-rubik font-bold text-[28px] md:text-[36px] leading-[1.04] text-[#113b29] w-full text-center md:text-left">
                      Bears
                    </h3>
                    <div className="bg-[#3a3a3a] h-[2px] w-full" />
                    <p className="font-rubik font-medium text-lg md:text-xl leading-[1.04] text-[#191919] w-full text-center md:text-left">
                      Pay tax & watch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center relative w-full md:w-[785px]">
            <div className="rotate-[-1deg] md:rotate-[-2.18deg]">
              <div className="bg-[#3dd68c] border-[#b1f1cb] border-b-4 border-l-8 rounded-[12px] px-4 md:px-10 py-6 md:py-9 w-full md:w-max">
                <p className="font-rubik font-bold text-[20px] md:text-[44px] leading-[1.04] text-[#113b29] text-center">
                  <span className="leading-[1.04]">Join the fight on </span>
                  <Link target="_blank" className="cursor-pointer underline" href="https://coinbarrel.com/">
                    coinbarrel.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <p className="font-rubik font-medium text-lg md:text-[28px] leading-[1.04] text-[#eee] text-center">
            $VERGE: Stack SOL. Stay chad.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 md:p-[124px]">
        <div className="bg-[#1e160f] border-[#a35829] border-b-2 border-r-6 rounded-[12px] flex flex-col min-h-[200px] md:h-[212px] items-center justify-between p-4 md:p-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
            <div className="h-12 w-12 md:h-16 md:w-16 relative">
              <Image
                src="/images/logo.png"
                alt="Verge Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-stretch md:items-end justify-center w-full md:w-[350px]">
              <button className="bg-[#ffa057] border-[#ffe0c2] cursor-pointer hover:bg-[#ffb957] border-b border-r-4 rounded-[12px] w-full py-3 px-6 flex items-center justify-center gap-2 font-rubik font-extrabold text-sm md:text-base text-[#17120e]">
                Buy now
              </button>
              <button className="bg-[#eee] border-[#eee] cursor-pointer hover:bg-[#ddd] border-r-3 rounded-[12px] w-full py-3 px-6 flex items-center justify-center gap-2 font-rubik font-extrabold text-sm md:text-base text-[#111]">
                View chart
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center w-full">
            <div className="flex gap-2 items-center">
              <Link href="https://x.com" target="_blank" className="bg-[#113B29] border-[#b1f1cb] border-b-3 border size-10 md:size-12 flex items-center justify-center rounded-[12px] p-2 cursor-pointer">
                <TwitterIcon className="size-5 md:size-6 text-[#eee]" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" className="bg-[#113B29] border-[#b1f1cb] border-b-3 border size-10 md:size-12 flex items-center justify-center rounded-[12px] p-2 cursor-pointer">
                <InstagramIcon className="size-5 md:size-6 text-[#eee]" />
              </Link>
              <Link href="https://t.me" target="_blank" className="bg-[#113B29] border-[#b1f1cb] border-b-3 border size-10 md:size-12 flex items-center justify-center rounded-[12px] p-2 cursor-pointer">
                <TelegramIcon className="size-5 md:size-6 text-[#eee]" />
              </Link>
            </div>
            <div className="bg-[#28684a] w-full md:flex-1 h-1 rounded-[32px]" />
            <p className="font-rubik font-medium text-sm md:text-base leading-[1.3] text-[#eee] text-center md:text-left">
              © 2026. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
