'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function CountUp({ end, duration = 2, prefix = '', suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (inView) {
      let frame = 0;
      const totalFrames = Math.round(duration * 60);
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      
      const counter = () => {
        frame++;
        const progress = easeOutCubic(frame / totalFrames);
        const currentCount = Math.round(end * progress);
        setCount(currentCount);

        if (frame < totalFrames) {
          frameRef.current = requestAnimationFrame(counter);
        } else {
            setCount(end);
        }
      };
      
      frameRef.current = requestAnimationFrame(counter);
    }
    
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
