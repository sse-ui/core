import {
  Icon as IconifyIcon,
  type IconifyRenderMode,
} from "@iconify-icon/react";
import React from "react";

export interface IconProps {
  name: string | object;
  mode?: IconifyRenderMode;
  size?: string | number;
  className?: string;

  // customize?: (
  //   content: string,
  //   name?: string,
  //   prefix?: string,
  //   provider?: string
  // ) => string;
}

export const Icon = ({ name, size, mode, className }: IconProps) => {
  const numSize = typeof size === "string" ? parseInt(size) : size;
  return (
    typeof name === "string" && (
      <IconifyIcon
        icon={name}
        name="sse"
        size={numSize}
        className={className}
        mode={mode}
      />
    )
  );
};
