import { css } from "@emotion/react";

export const modal = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: flex-end; /* 아래쪽 정렬 */
    z-index: 999;
`;

export const bottomSheet = css`
    width: 100%;
    background-color: #ffffff;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 24px 24px 40px 24px;
    box-sizing: border-box;  
    max-height: 85vh;        
    overflow-y: auto;        
`;