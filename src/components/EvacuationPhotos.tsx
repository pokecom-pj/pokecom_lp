import React from 'react';

const EvacuationPhotos: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-black font-sans leading-normal mb-4">
            実際の避難訓練の様子
          </h2>
          <p className="text-xl font-normal text-black font-sans tracking-[2.00px] leading-normal">
            緊急時における適切な対応を身につけるための訓練を実施しています
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <img
              src="./evacuation-drill-1.jpg"
              alt="避難訓練の様子1 - タブレットを使用した受付業務"
              className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
          </div>
          
          <div className="relative group">
            <img
              src="./evacuation-drill-2.jpg"
              alt="避難訓練の様子2 - 避難所での受付対応"
              className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-normal text-black font-sans tracking-[1.00px] leading-normal">
            ※ 写真は実際の避難訓練時に撮影されたものです
          </p>
        </div>
      </div>
    </section>
  );
};

export default EvacuationPhotos;