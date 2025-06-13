import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { AnimatedSection } from "../../../../components/AnimatedSection";

interface ServiceCard {
  id: number;
  title: string;
  iconSrc: string;
  iconAlt: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: "マイナンバーカード\n読み取り機能",
    iconSrc: "./group-2.png",
    iconAlt: "Group",
    position: "top-left",
  },
  {
    id: 2,
    title: "OCR読み取り機能",
    iconSrc: "./group-1.png",
    iconAlt: "Group",
    position: "top-right",
  },
  {
    id: 3,
    title: "QRコード読み取り機能",
    iconSrc: "./qr-code-scanner-fill0-wght400-grad0-opsz24-1.svg",
    iconAlt: "Qr code scanner",
    position: "bottom-left",
  },
  {
    id: 4,
    title: "Webフォームからの\n受付機能",
    iconSrc: "./group.png",
    iconAlt: "Group",
    position: "bottom-right",
  },
];

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

const ServiceIcon: React.FC<{ card: ServiceCard }> = ({ card }) => {
  const iconStyles = {
    "top-left": "absolute w-20 h-14 top-3 left-0",
    "top-right": "absolute w-20 h-16 top-2 left-0",
    "bottom-left": "w-20 h-20",
    "bottom-right": "w-20 h-[88px]",
  };

  return (
    <div className="w-[120px] h-[120px] bg-blue-600 rounded-[60px] mt-8 flex items-center justify-center">
      {card.position === "top-left" || card.position === "top-right" ? (
        <div className="relative w-20 h-20">
          <img
            className={iconStyles[card.position]}
            alt={card.iconAlt}
            src={card.iconSrc}
          />
        </div>
      ) : (
        <img
          className={iconStyles[card.position]}
          alt={card.iconAlt}
          src={card.iconSrc}
        />
      )}
    </div>
  );
};

const ServiceCard: React.FC<{ card: ServiceCard }> = ({ card }) => (
  <div className="flex justify-center">
    <Card className="w-[400px] h-[300px] rounded-[20px] border-[5px] border-solid border-blue-600 bg-white relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
      <CardContent className="p-0 h-full flex flex-col items-center">
        <ServiceIcon card={card} />
        <div
          className="mt-auto mb-8 text-center [font-family:'Noto_Serif_JP',Helvetica] font-bold text-blue-600 text-[32px]"
          style={{ whiteSpace: "pre-line" }}
        >
          {card.title}
        </div>
      </CardContent>
    </Card>
  </div>
);

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#e9f0ff]">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-center font-serif text-4xl md:text-[64px] font-bold mb-16">
            <span className="text-blue-600">スマート受付</span>
            <span className="text-black">で混雑や集計をゼロに</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {serviceCards.map((card, index) => (
            <AnimatedSection
              key={card.id}
              rootMargin={`${index * 100}px`}
            >
              <ServiceCard card={card} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
