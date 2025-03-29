import React from "react";
export interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg" | "xl";
    backgroundColor?: string | any;
    rounded?: true | false;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
