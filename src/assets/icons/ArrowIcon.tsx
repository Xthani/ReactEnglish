import React from "react";

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

export const ArrowIcon: React.FC<IconProps> = ({
  width = "24",
  height = "24",
  color = "currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      style={{ color }}
    >
      <path
        d="M7 11L12 6L17 11M12 18V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
