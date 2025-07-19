'use client';

import { useRef, useEffect, useState, ElementType, ComponentPropsWithoutRef } from 'react';

type AnimatedSectionProps<T extends ElementType> = {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  as?: T;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
} & ComponentPropsWithoutRef<T>;

export function AnimatedSection<T extends ElementType = 'div'>({
  children,
  className = '',
  delay = 'duration-700',
  as,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  ...props
}: AnimatedSectionProps<T>) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const Wrapper = as || 'div';

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [rootMargin, threshold, once]);

  return (
    <Wrapper
      ref={sectionRef as React.Ref<HTMLDivElement>}
      className={`transition-all ease-out ${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      {...props}
    >
      {children}
    </Wrapper>
  );
}