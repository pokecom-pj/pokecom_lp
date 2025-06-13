import React from "react";
import { Button } from "../../../../components/ui/button";

const fadeInUpStyle = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeInUp {
    animation: fadeInUp 1s ease-out forwards;
  }
`;

const MainHeading: React.FC = () => (
  <>
    <div className="hidden md:block absolute top-[113px] left-[55px] font-['Inter',Helvetica] font-normal text-[110px] animate-fadeInUp">
      <span className="text-[#ffbd59]">「混乱ゼロ」</span>
      <span className="text-white">の<br />避難所運営へ。</span>
    </div>
    <div className="block md:hidden w-full text-center font-['Inter',Helvetica] font-normal text-5xl mt-8 px-2 relative z-10 animate-fadeInUp">
      <span className="text-[#ffbd59]">「混乱ゼロ」</span>
      <span className="text-white">の<br />避難所運営へ。</span>
    </div>
  </>
);

const Subheading: React.FC = () => (
  <>
    <div className="hidden md:block absolute top-[458px] left-[120px] font-['Inter',Helvetica] font-normal text-5xl animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
      <span className="text-white">ポケコムが、現場の不安を<br /></span>
      <span className="text-[#ffbd59]">「見える化」</span>
      <span className="text-white">します。</span>
    </div>
    <div className="block md:hidden w-full text-center font-['Inter',Helvetica] font-normal text-2xl mt-4 px-4 relative z-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
      <span className="text-white">ポケコムが、現場の不安を<br /></span>
      <span className="text-[#ffbd59]">「見える化」</span>
      <span className="text-white">します。</span>
    </div>
  </>
);

const Description: React.FC = () => (
  <>
    <div className="hidden md:block absolute top-[610px] left-[70px] font-['Inter',Helvetica] font-normal text-white text-[32px] animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
      受付から情報共有、備蓄管理まで。
      <br />
      すべてが一つにまとまった避難所運営支援システム。
    </div>
    <div className="block md:hidden w-full text-center font-['Inter',Helvetica] font-normal text-white text-base mt-6 px-4 relative z-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
      受付から情報共有、備蓄管理まで。
      <br />
      すべてが一つにまとまった避難所運営支援システム。
    </div>
  </>
);

const Note: React.FC = () => (
  <>
    <div className="hidden md:block absolute top-[715px] left-[70px] font-['Inter',Helvetica] font-normal text-white text-[24px] animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
      ※自治体防災関係者へのご案内
    </div>
    <div className="block md:hidden w-full text-center font-['Inter',Helvetica] font-normal text-white text-sm mt-4 px-4 relative z-10 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
      ※自治体防災関係者へのご案内
    </div>
  </>
);

const HeadquartersImage: React.FC = () => {
  const handleImageClick = () => {
    window.open('https://gcomholdingscoltd.outsystemsenterprise.com/PokeCom_Residents/Login', '_blank');
  };

  return (
    <>
      <img
        className="hidden md:block absolute w-[413px] h-[413px] top-[353px] right-[76px] object-cover rounded-[20px] transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:scale-[1.02] animate-fadeInUp"
        style={{ animationDelay: '0.9s' }}
        alt="Pokecom shelter headquarters"
        src="./-----pokecom-pokecom-shelter-headquarters-1.png"
      />
      <img
        className="block md:hidden w-1/4 mx-auto mt-8 rounded-[20px] relative z-10 cursor-pointer hover:opacity-90 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-all duration-300 animate-fadeInUp"
        style={{ animationDelay: '0.9s' }}
        alt="Pokecom shelter headquarters"
        src="./-----pokecom-pokecom-shelter-headquarters-1.png"
        onClick={handleImageClick}
      />
    </>
  );
};

const CTAButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://lg-institute.gyoseiq.co.jp/public/research/community/input', '_blank');
  };

  return (
    <>
      <div className="hidden md:block absolute bottom-[94px] left-[138px]">
        <Button 
          className="w-[459px] h-[86px] bg-[#004aad] rounded-[20px] border-[5px] border-solid border-white text-white text-[32px] font-normal font-['Inter',Helvetica] hover:bg-[#0056c7] hover:scale-105 hover:shadow-lg transition-all duration-300"
          onClick={handleClick}
        >
          資料請求はこちら
        </Button>
      </div>
      <div className="block md:hidden w-full flex justify-center mt-8 relative z-[2]">
        <Button 
          className="w-4/5 h-16 bg-[#004aad] rounded-[20px] border-[3px] border-solid border-white text-white text-xl font-normal font-['Inter',Helvetica] hover:bg-[#0056c7] hover:scale-105 hover:shadow-lg transition-all duration-300 mb-10"
          onClick={handleClick}
        >
          資料請求はこちら
        </Button>
      </div>
    </>
  );
};

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[600px] md:h-[960px] flex flex-col md:block">
      <style>{fadeInUpStyle}</style>
      <div className="relative w-full h-full bg-[url(/32495475-l-1.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#004aad99] z-0" />
        <MainHeading />
        <Subheading />
        <Description />
        <Note />
        <HeadquartersImage />
        <CTAButton />
      </div>
    </section>
  );
};