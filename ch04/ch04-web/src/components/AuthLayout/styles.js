import { css, keyframes } from "@emotion/react";

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const layoutContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
`;

export const cardWrapper = css`
    position: relative;
    width: 100%;
    max-width: 450px;
    border-radius: 20px;
    padding: 2px; /* for the glowing border */
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
    z-index: 1;

    /* Base glassmorphism without hover */
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 45px 0 rgba(0, 212, 255, 0.2);
        border: 1px solid transparent; /* Hide normal border to show glow */
    }

    &::before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: conic-gradient(from 0deg, transparent 0%, transparent 40%, rgba(144, 19, 254, 0.8) 50%, rgba(0, 212, 255, 0.8) 60%, transparent 100%);
        animation: ${rotate} 3s linear infinite;
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: -2;
    }

    &:hover::before {
        opacity: 1;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 2px;
        background: rgba(10, 15, 30, 0.7);
        border-radius: 18px;
        backdrop-filter: blur(20px);
        z-index: -1;
    }
`;

export const content = css`
    position: relative;
    z-index: 2;
    padding: 40px;
    display: flex;
    flex-direction: column;
    color: #ffffff;

    h1 {
        margin: 0 0 20px 0;
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        background: linear-gradient(to right, #00d4ff, #9013fe);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0 0 20px 0;
        text-align: center;
        
        a {
            color: #00d4ff;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.2s;

            &:hover {
                color: #9013fe;
            }
        }
    }
`;
