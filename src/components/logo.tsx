import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-label="Cofee Logo"
      {...props}
      className={cn(props.className)}
    >
      <defs>
        <path
          id="brush-stroke"
          d="M 95,50 A 45,45 0 1,1 5,50 A 45,45 0 1,1 95,50 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 283,
            strokeDashoffset: 50,
          }}
        />
      </defs>
      <use href="#brush-stroke" />
      <g transform="translate(15, 20) scale(0.7)">
        <path
          d="M10 25 H 70 C 80 25, 80 40, 70 40 H 10 C 0 40, 0 25, 10 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        />
        <path d="M70 25 V 15" stroke="currentColor" strokeWidth="6" />
        <path d="M15 5 C 15 0, 30 0, 30 5 S 15 10, 15 5" stroke="currentColor" strokeWidth="4" />
        <path d="M40 5 C 40 0, 55 0, 55 5 S 40 10, 40 5" stroke="currentColor" strokeWidth="4" />
      </g>
    </svg>
  );
}
