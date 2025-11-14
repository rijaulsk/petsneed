import type { SVGProps } from 'react';

export const PawPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="4" cy="8" r="2" />
    <path d="M12 20a4 4 0 0 0 8 0V12a8 8 0 0 0-8-8h-1" />
    <path d="M4 12v8a4 4 0 0 0 8 0V12a4.95 4.95 0 0 0-2-4" />
  </svg>
);
