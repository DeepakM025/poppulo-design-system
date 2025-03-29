import React from "react";
import { StyledButton } from "./Button.styles";

export interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg" | "xl";
    backgroundColor?: string | any;
    rounded?: true | false;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = "secondary", size = "md", backgroundColor="", rounded = false, onClick }) => {
    return (
        <StyledButton variant={variant} size={size} backgroundColor={backgroundColor} rounded={rounded} onClick={onClick}>
            {label}
        </StyledButton>
    );
};

export default Button;
