import * as React from "react";

type CheckIconProps = {
  title?: string;
  className?: string;
};

export function CheckIcon({ className, title, ...rest }: CheckIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      width="12"
      height="12"
      {...rest}
    >
      {title && <title>{title}</title>}
      <path
        d="M10 3L4.5 8.5L2 6"
        stroke="currentColor"
        strokeWidth="1.6666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
