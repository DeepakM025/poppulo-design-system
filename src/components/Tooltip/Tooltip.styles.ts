import styled, { css } from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipText = styled.div<{ "data-position": "top" | "bottom" | "left" | "right" }>`
font-family: "Funnel Sans", sans-serif;
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  padding: 8px 12px;
  border-radius: 4px;
  position: absolute;
  z-index: 10;
  white-space: nowrap;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  
  /* Arrow */
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
  }

  /* Positioning */
  ${({ "data-position": position }) => position === "top" && css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    
    &::after {
      border-width: 6px 6px 0 6px;
      border-color: black transparent transparent transparent;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
    }
  `}

  ${({ "data-position": position }) => position === "bottom" && css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
    
    &::after {
      border-width: 0 6px 6px 6px;
      border-color: transparent transparent black transparent;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
    }
  `}

  ${({ "data-position": position }) => position === "left" && css`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 8px;
    
    &::after {
      border-width: 6px 0 6px 6px;
      border-color: transparent transparent transparent black;
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
    }
  `}

  ${({ "data-position": position }) => position === "right" && css`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
    
    &::after {
      border-width: 6px 6px 6px 0;
      border-color: transparent black transparent transparent;
      left: -6px;
      top: 50%;
      transform: translateY(-50%);
    }
  `}

  /* Show Tooltip on Hover */
  ${TooltipWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
