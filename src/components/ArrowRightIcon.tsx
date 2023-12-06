import * as React from "react";

type ArrowRightIconProps = {
  title?: string;
  className?: string;
};

export function ArrowRightIcon({
  className,
  title,
  ...rest
}: ArrowRightIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      {...rest}
    >
      {title && <title>{title}</title>}
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
