import React from "react";
import { TooltipWrapper, TooltipText } from "./Tooltip.styles";

export interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right"; // Add position prop
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position = "right", children }) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText data-position={position}>{text}</TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;
