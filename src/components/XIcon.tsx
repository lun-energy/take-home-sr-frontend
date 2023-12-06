import * as React from "react";

type XIconProps = {
  title?: string;
  className?: string;
};

export function XIcon({ className, title, ...rest }: XIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      width="20"
      height="20"
      {...rest}
    >
      {title && <title>{title}</title>}
      <path
        d="M15 5L5 15M5 5L15 15"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
