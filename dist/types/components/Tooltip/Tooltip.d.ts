import React from "react";
export interface TooltipProps {
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
