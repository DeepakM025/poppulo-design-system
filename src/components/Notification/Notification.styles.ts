import styled, { css } from "styled-components";

export const CardWrapper = styled.div<{ status: "success" | "error" }>`
    font-family: "Funnel Sans", sans-serif;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 280px;
    position: absolute;
    max-width: 400px;
    right: 10px;
    top: 10px;
    z-index: 99;

    ${({ status }) =>
        status === "success" &&
        css`
            background: #f0fdf4;
            color: #065f46;
        `}

    ${({ status }) =>
        status === "error" &&
        css`
            background: #fef2f2;
            color: #b91c1c;
        `}
`;

export const Icon = styled.div<{ status: "success" | "error" }>`
    font-size: 1rem;
    margin-right: 10px;

    ${({ status }) =>
        status === "success" &&
        css`
            color: #047857;
        `}

    ${({ status }) =>
        status === "error" &&
        css`
            color: #b91c1c;
        `}
`;

export const Content = styled.div`
    flex-grow: 1;
`;

export const Title = styled.p`
    font-weight: 600;
    letter-spacing: 0.7px;
    margin: 0;
`;

export const Description = styled.p`
    margin: 2px 0 0;
    font-size: 14px;
    color: inherit;
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-left: auto;
    color: inherit;
`;
