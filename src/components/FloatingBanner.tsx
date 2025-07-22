import React, { useState, useEffect } from 'react';

const FloatingBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center text-center">
            <button className="text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg shadow-md mb-2" style={{backgroundColor: '#f6bf60'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#e6af50'} onMouseLeave={(e) => e.target.style.backgroundColor = '#f6bf60'}>
              資料請求はこちら
            </button>
            <p className="text-white text-sm">詳細はお問合せください</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBanner;