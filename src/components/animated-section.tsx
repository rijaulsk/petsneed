'use client';

import { ElementType, HTMLAttributes, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right';
  delay?: number;
  duration?: number;
}

export function AnimatedSection({
  as: Comp = 'section',
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  duration = 500,
  ...props
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationClass = {
    'fade-in': 'animate-fade-in',
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
  }[animation];

  return (
    <Comp
      ref={ref}
      className={cn('opacity-0', inView && animationClass, className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        willChange: 'transform, opacity',
      }}
      {...props}
    >
      {children}
    </Comp>
  );
}
