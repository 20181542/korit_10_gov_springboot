import { css } from "@emotion/react";

export const inputContainer = css`
    margin-bottom: 15px;
    width: 100%;
`;

export const input = css`
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
        border-color: rgba(0, 212, 255, 0.8);
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const button = css`
    width: 100%;
    padding: 15px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    background: linear-gradient(135deg, rgba(144, 19, 254, 0.8), rgba(0, 212, 255, 0.8));
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 10px rgba(0, 212, 255, 0.4);
    }

    &:disabled {
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.2);
        cursor: not-allowed;
        box-shadow: none;
        transform: none;
    }
`;

export const errorText = css`
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 5px;
    margin-left: 5px;
    min-height: 15px;
`;
