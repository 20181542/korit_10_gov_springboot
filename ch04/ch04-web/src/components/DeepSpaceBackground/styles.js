import { css } from "@emotion/react";

export const backgroundContainer = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    z-index: -1;
    overflow: hidden;
`;

export const starLayer = (size) => css`
    width: ${size}px;
    height: ${size}px;
    background: transparent;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const centerGlow = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 60vw;
    max-width: 800px;
    max-height: 800px;
    background: radial-gradient(circle, rgba(144, 19, 254, 0.15) 0%, rgba(0, 212, 255, 0.1) 30%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
`;
