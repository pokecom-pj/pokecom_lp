import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Data for feature cards
  const featureCards = [
    {
      id: 1,
      title: "受付業務",
      description:
        "避難者カードを使って\n手書きで受付を行っているが\n受付に時間がかかる",
      imageSrc: "/19421-color-1.png",
      imageAlt: "受付業務のイラスト",
    },
    {
      id: 2,
      title: "集計業務",
      description: "受付した情報を集計するのに\nとても時間がかかる",
      imageSrc: "/18158-color-1.png",
      imageAlt: "集計業務のイラスト",
    },
    {
      id: 3,
      title: "避難所管理",
      description:
        "どこの避難所にどれだけの\n避難者が避難しているのか\n把握しずらい",
      imageSrc: "/17029-color-1.png",
      imageAlt: "避難所管理のイラスト",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Section Title */}
          <div className="mb-16 pb-4 border-b-[3px] border-white text-center w-full max-w-2xl">
            <h2 className="text-[32px] font-bold text-black [font-family:'Noto_Serif_JP',Helvetica] leading-normal">
              避難所運営でこんな悩みはありませんか？
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card) => (
              <div key={card.id} className="flex flex-col items-center">
                {/* Circular Image Container */}
                <div className="relative mb-8">
                  <div className="w-[200px] h-[200px] bg-[#d9d9d9] rounded-full border border-solid border-white flex items-center justify-center">
                    <img
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      className="object-cover max-w-[180px] max-h-[174px]"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <Card className="w-full max-w-[320px] border-0">
                  <CardContent className="p-0">
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-black [font-family:'Noto_Serif_JP',Helvetica] text-center mb-4 leading-normal">
                        {card.title}
                      </h3>
                      <div className="w-full h-[150px] bg-[#d9d9d980] border border-solid border-white p-4">
                        <p className="text-xl font-normal text-black [font-family:'Noto_Serif_JP',Helvetica] tracking-[2.00px] leading-normal whitespace-pre-line">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};