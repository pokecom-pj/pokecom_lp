import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100px]'
      } ${className}`}
    >
      {children}
    </div>
  );
}; 