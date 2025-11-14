import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function PageShell({ children, className, as: Comp = 'div' }: PageShellProps) {
  return (
    <Comp className={cn('container mx-auto section-padding', className)}>
      {children}
    </Comp>
  );
}

interface PageHeaderProps {
    heading: string;
    subheading?: string;
    className?: string;
}

export function PageHeader({ heading, subheading, className }: PageHeaderProps) {
    return (
        <div className={cn("text-center space-y-4 mb-12 md:mb-16", className)}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{heading}</h1>
            {subheading && <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">{subheading}</p>}
        </div>
    )
}
