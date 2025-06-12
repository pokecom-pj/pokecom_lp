import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "../../../../components/AnimatedSection";

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

const featurePoints = [
  {
    id: 1,
    text: "すぐに使える直感的操作（ITに強くない職員も安心）",
  },
  {
    id: 2,
    text: "多様な受付手段に対応（地域事情にフィット）",
  },
  {
    id: 3,
    text: "地方自治体と共同開発（現場の声を反映）",
  },
] as const;

const FeaturePoint: React.FC<{ text: string }> = ({ text }) => (
  <Card className="border-none bg-transparent shadow-none">
    <CardContent className="p-0">
      <p className="font-serif font-bold text-[26px] text-black flex items-center gap-2">
        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
        {text}
      </p>
    </CardContent>
  </Card>
);

const RequestButton: React.FC = () => (
  <Button 
    className="w-[459px] h-[86px] bg-[#004aad] rounded-[20px] border-[5px] border-solid border-white text-white text-[32px] font-normal font-['Inter',Helvetica] hover:bg-[#0056c7] hover:scale-105 hover:shadow-lg transition-all duration-300"
    onClick={() => window.open('https://lg-institute.gyoseiq.co.jp/public/research/community/input', '_blank')}
  >
    資料請求はこちら
  </Button>
);

export const OverviewSection = (): JSX.Element => {
  return (
    <>
      <section className="w-full py-16 bg-[#e5f0fe]">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <AnimatedSection>
            <h2 className="text-center font-serif text-[64px] font-bold mb-16">
              <span className="text-blue-600">&#34;災害時の使いやすさ&#34;</span>
              <span className="text-black">を第一に<br />考えた 行政専用ツール</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <AnimatedSection rootMargin="100px">
              <div className="md:w-1/2">
                <img
                  className="w-full max-w-[577px] h-auto object-cover"
                  alt="Tablet interface showing the application"
                  src="/----ipad-removebg-preview-1.png"
                />
              </div>
            </AnimatedSection>

            <div className="md:w-1/2 space-y-10">
              {featurePoints.map((feature, index) => (
                <AnimatedSection
                  key={feature.id}
                  rootMargin={`${200 + index * 100}px`}
                >
                  <FeaturePoint text={feature.text} />
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection rootMargin="300px">
            <RequestButton />
          </AnimatedSection>
        </div>
      </section>
      <footer className="w-full py-4 text-center text-gray-500 text-sm">
        © 2025 Gcom Holdings Co., Ltd.
      </footer>
    </>
  );
};


