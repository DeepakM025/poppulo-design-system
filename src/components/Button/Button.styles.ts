import styled from "styled-components";

export const StyledButton = styled.button<{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg" | "xl";
    backgroundColor: string | undefined,
    rounded: true | false
}>`
    font-family: "Funnel Sans", sans-serif;
    border-radius: ${({rounded}) => rounded ? '30px' : '4px'};
    font-size: ${({ size }) =>
        size === "sm"
            ? "12px"
            : size === "md"
            ? "14px"
            : size === "lg"
            ? "16px"
            : "18px"};
    padding: ${({ size }) =>
        size === "sm"
            ? "6px 12px"
            : size === "md"
            ? "8px 14px"
            : size === "lg"
            ? "10px 16px"
            : "12px 20px"};
    cursor: pointer;
    background-color: ${({ backgroundColor, variant }) =>
        variant === "secondary" && backgroundColor ? "transparent" : backgroundColor ? backgroundColor : variant === "primary" ? "#4f39f6" : "transparent"};
    color: ${({variant, backgroundColor}) => variant === 'secondary' ? backgroundColor ? backgroundColor : '#4f39f6' : '#fff'};
    border: ${({ variant, backgroundColor }) =>
        variant === "primary" && backgroundColor ? `1px solid ${backgroundColor}` : variant === "secondary" && backgroundColor ? `1px solid ${backgroundColor}` : "1px solid #4f39f6"};
    letter-spacing: 0.7px;
    &:hover {
        opacity: 0.9;
    }
`;
