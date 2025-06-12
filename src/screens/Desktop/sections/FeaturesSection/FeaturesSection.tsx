import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

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

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const featureCards: FeatureCard[] = [
  {
    id: 1,
    title: "受付業務",
    description: "避難者カードを使って\n手書きで受付を行っているが\n受付に時間がかかる",
    imageSrc: "./19421-color-1.png",
    imageAlt: "受付業務のイラスト",
  },
  {
    id: 2,
    title: "集計業務",
    description: "受付した情報を集計するのに\nとても時間がかかる",
    imageSrc: "./18158-color-1.png",
    imageAlt: "集計業務のイラスト",
  },
  {
    id: 3,
    title: "避難所管理",
    description: "どこの避難所にどれだけの\n避難者が避難しているのか\n把握しずらい",
    imageSrc: "./17029-color-1.png",
    imageAlt: "避難所管理のイラスト",
  },
];

const FeatureImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative mb-8">
    <div className="w-[200px] h-[200px] bg-[#d9d9d9] rounded-full border border-solid border-white flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="object-cover max-w-[180px] max-h-[174px]"
      />
    </div>
  </div>
);

const FeatureCard: React.FC<FeatureCard> = ({ title, description, imageSrc, imageAlt }) => (
  <div className="flex flex-col items-center animate-fadeInUp">
    <FeatureImage src={imageSrc} alt={imageAlt} />
    <Card className="w-full max-w-[320px] border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="flex items-center justify-center h-[60px] bg-gray-50">
            <h3 className="text-2xl font-bold text-black [font-family:'Noto_Serif_JP',Helvetica] text-center leading-normal">
              {title}
            </h3>
          </div>
          <div className="w-full h-[150px] bg-[#d9d9d980] border-t border-gray-200 p-4">
            <p className="text-xl font-normal text-black [font-family:'Noto_Serif_JP',Helvetica] tracking-[2.00px] leading-normal whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white">
      <style>{fadeInUpStyle}</style>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Section Title */}
          <div className="mb-16 pb-4 border-b-[3px] border-white text-center w-full max-w-2xl animate-fadeInUp">
            <h2 className="text-[32px] font-bold text-black [font-family:'Noto_Serif_JP',Helvetica] leading-normal">
              避難所運営でこんな悩みはありませんか？
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div key={card.id} style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                <FeatureCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};