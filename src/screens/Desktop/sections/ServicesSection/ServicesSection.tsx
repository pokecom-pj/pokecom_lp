import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Service card data for mapping
const serviceCards = [
  {
    id: 1,
    title: "マイナンバーカード\n読み取り機能",
    iconSrc: "/group-2.png",
    iconAlt: "Group",
    position: "top-left",
  },
  {
    id: 2,
    title: "OCR読み取り機能",
    iconSrc: "/group-1.png",
    iconAlt: "Group",
    position: "top-right",
  },
  {
    id: 3,
    title: "QRコード読み取り機能",
    iconSrc: "/qr-code-scanner-fill0-wght400-grad0-opsz24-1.svg",
    iconAlt: "Qr code scanner",
    position: "bottom-left",
  },
  {
    id: 4,
    title: "Webフォームからの\n受付機能",
    iconSrc: "/group.png",
    iconAlt: "Group",
    position: "bottom-right",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#e9f0ff]">
      <div className="container mx-auto">
        <h2 className="text-center font-serif text-[64px] font-bold mb-16">
          <span className="text-blue-600">スマート受付</span>
          <span className="text-black">で混雑や集計をゼロに</span>
        </h2>
        <div className="grid grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {serviceCards.map((card) => (
            <div key={card.id} className="flex justify-center">
              <Card className="w-[400px] h-[300px] rounded-[20px] border-[5px] border-solid border-blue-600 bg-white relative">
                <CardContent className="p-0 h-full flex flex-col items-center">
                  <div className="w-[120px] h-[120px] bg-blue-600 rounded-[60px] mt-8 flex items-center justify-center">
                    {card.position === "top-left" && (
                      <div className="relative w-20 h-20">
                        <img
                          className="absolute w-20 h-14 top-3 left-0"
                          alt={card.iconAlt}
                          src={card.iconSrc}
                        />
                      </div>
                    )}
                    {card.position === "top-right" && (
                      <div className="relative w-20 h-20">
                        <img
                          className="absolute w-20 h-16 top-2 left-0"
                          alt={card.iconAlt}
                          src={card.iconSrc}
                        />
                      </div>
                    )}
                    {card.position === "bottom-left" && (
                      <img
                        className="w-20 h-20"
                        alt={card.iconAlt}
                        src={card.iconSrc}
                      />
                    )}
                    {card.position === "bottom-right" && (
                      <img
                        className="w-20 h-[88px]"
                        alt={card.iconAlt}
                        src={card.iconSrc}
                      />
                    )}
                  </div>
                  <div
                    className="mt-auto mb-8 text-center [font-family:'Noto_Serif_JP',Helvetica] font-bold text-blue-600 text-[32px]"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {card.title}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
