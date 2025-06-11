import React from "react";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[600px] md:h-[960px] flex flex-col md:block">
      <div className="relative w-full h-full bg-[url(/32495475-l-1.png)] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#004aad99] z-0" />

        {/* Main Heading */}
        <div className="hidden md:block absolute top-[113px] left-[55px] font-['Inter',Helvetica] font-normal text-[110px]">
          <span className="text-[#ffbd59]">「混乱ゼロ」</span>
          <span className="text-white">の<br />避難所運営へ。</span>
        </div>
        <div className="block md:hidden w-full text-center font-['Inter',Helvetica] font-normal text-7xl mt-8 px-2 relative z-10">
          <span className="text-[#ffbd59]">「混乱ゼロ」</span>
          <span className="text-white">の<br />避難所運営へ。</span>
        </div>

        {/* Subheading */}
        <div className="hidden md:block absolute top-[458px] left-[120px] font-['Inter',Helvetica] font-normal text-5xl">
          <span className="text-white">ポケコムが、現場の不安を<br /></span>
          <span className="text-[#ffbd59]">「見える化」</span>
          <span className="text-white">します。</span>
        </div>
        <div className="block md:hidden w-full text-center font-['Inter',Helvetica] font-normal text-3xl mt-4 px-4 relative z-10">
          <span className="text-white">ポケコムが、現場の不安を<br /></span>
          <span className="text-[#ffbd59]">「見える化」</span>
          <span className="text-white">します。</span>
        </div>

        {/* Description Text */}
        <div className="hidden md:block absolute top-[641px] left-[70px] font-['Inter',Helvetica] font-normal text-white text-[32px]">
          受付から情報共有、備蓄管理まで。
          <br />
          すべてが一つにまとまった避難所運営支援システム。
        </div>
        <div className="block md:hidden w-full text-center font-['Inter',Helvetica] font-normal text-white text-base mt-6 px-4 relative z-10">
          受付から情報共有、備蓄管理まで。
          <br />
          すべてが一つにまとまった避難所運営支援システム。
        </div>

        {/* PokeCom Headquarters Image */}
        <img
          className="hidden md:block absolute w-[413px] h-[413px] top-[353px] right-[76px] object-cover rounded-[20px]"
          alt="Pokecom shelter headquarters"
          src="/-----pokecom-pokecom-shelter-headquarters-1.png"
        />
        <img
          className="block md:hidden w-1/4 mx-auto mt-8 rounded-[20px] relative z-10"
          alt="Pokecom shelter headquarters"
          src="/-----pokecom-pokecom-shelter-headquarters-1.png"
        />

        {/* CTA Button */}
        <div className="hidden md:block absolute bottom-[94px] left-[138px]">
          <Button 
            className="w-[459px] h-[86px] bg-[#004aad] rounded-[20px] border-[5px] border-solid border-white text-white text-[32px] font-normal font-['Inter',Helvetica] hover:bg-[#0056c7] hover:scale-105 hover:shadow-lg transition-all duration-300 relative z-10"
            onClick={() => window.open('https://lg-institute.gyoseiq.co.jp/public/research/community/input', '_blank')}
          >
            資料請求はこちら
          </Button>
        </div>
        {/* Mobile CTA Button */}
        <div className="block md:hidden w-full flex justify-center mt-8">
          <Button 
            className="w-4/5 h-16 bg-[#004aad] rounded-[20px] border-[3px] border-solid border-white text-white text-xl font-normal font-['Inter',Helvetica] hover:bg-[#0056c7] hover:scale-105 hover:shadow-lg transition-all duration-300 mb-10 relative z-10"
            onClick={() => window.open('https://lg-institute.gyoseiq.co.jp/public/research/community/input', '_blank')}
          >
            資料請求はこちら
          </Button>
        </div>


      </div>
    </section>
  );
};