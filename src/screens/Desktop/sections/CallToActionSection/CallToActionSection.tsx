import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Users, Package, MapPin, Clock, MessageCircle, BarChart3 } from "lucide-react";

export const CallToActionSection = (): JSX.Element => {
  // Feature card data
  const featureCards = [
    {
      title: "要支援者管理",
      description: "事前名簿とリアルタイム情報の一元管理",
      bgColor: "bg-[#e5f0fe]",
      iconColor: "bg-blue-600",
      icon: Users,
    },
    {
      title: "備蓄品管理",
      description: "在庫・利用履歴をクラウドで管理",
      bgColor: "bg-[#e5fced]",
      iconColor: "bg-green-600",
      icon: Package,
    },
    {
      title: "避難所マップ",
      description: "マップ連携で住民に公開",
      bgColor: "bg-[#fff3e3]",
      iconColor: "bg-orange-600",
      icon: MapPin,
    },
    {
      title: "勤怠",
      description: "スタッフの勤怠を管理",
      bgColor: "bg-[#f8f1ff]",
      iconColor: "bg-purple-600",
      icon: Clock,
    },
    {
      title: "メッセージ",
      description: "各避難所および本部と連絡",
      bgColor: "bg-[#e4fcf7]",
      iconColor: "bg-teal-600",
      icon: MessageCircle,
    },
    {
      title: "自動集計",
      description: "報告業務の時短に",
      bgColor: "bg-[#e7edff]",
      iconColor: "bg-indigo-600",
      icon: BarChart3,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center font-serif text-[64px] font-bold mb-16">
          <span className="text-black">煩雑な避難所業務、</span><br />
          <span className="text-blue-600">ONEシステム</span>
          <span className="text-black">でまるごと解決</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={index}
                className={`${card.bgColor} border-none rounded-[20px] h-[300px] relative transition-shadow duration-300 hover:shadow-lg cursor-pointer`}
              >
                <CardContent className="p-0 h-full">
                  <div
                    className={`${card.iconColor} w-[90px] h-[90px] rounded-[45px] absolute top-[30px] left-[29px] flex items-center justify-center`}
                  >
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>

                  <div className="absolute top-[152px] left-[89px] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-black text-[32px] tracking-[0] whitespace-nowrap leading-normal">
                    {card.title}
                  </div>

                  <div className="absolute top-[226px] left-7 [font-family:'Noto_Serif_JP',Helvetica] font-bold text-black text-xl tracking-[0] whitespace-nowrap leading-normal">
                    {card.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};