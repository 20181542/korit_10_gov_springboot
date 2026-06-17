import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    
`;

export const title = css`
    margin: 0;
    font-size: 28px;
`;

export const profile = (url) => css`
    box-shadow: 0 0 3px 3px #dbdbdb;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    background-color: #dbdbdb;
    background-image: url("${url}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`;

export const top = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 0 0 28px;
    padding: 20px;
    
`;

export const leftup = (color) => css`
    background-color: #1c6feb;
    border-radius: 14px;
    padding: 16px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    

`;

export const rightup = css`
    background-color: #eb3e3e;
    border-radius: 14px;
    padding: 16px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`;
export const leftdown = css`
    background-color:  #1f1e1e;
    border-radius: 14px;
    padding: 16px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`;
export const rightdown = css`
    background-color:  #a5a2a2;
    border-radius: 14px;
    padding: 16px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`;

export const leftupin = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
export const icon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background-color: #ffffff22;
`;
export const day = css`
    font-size: 36px;
    font-weight: 700px;
    color: white;
`;

export const message = css`
    font-size: 15px;
    font-weight: 600;
    color: white;
`;


// ---------------------------------

export const main = css`
    box-sizing: border-box;
    padding: 20px 16px 24px;
    flex-grow: 1;
    
`;


export const listGroup = css`


    & > header {
        display: flex;
        justify-content: space-between;
        padding: 0 2px;
        margin-bottom: 10px;

        & > h3 {
            margin: 0;
            font-size: 20px;
        }        
    }

    & > ul {
        box-shadow: 0px 1px 4px #0000000f;
        margin: 0;
        padding: 0;
        list-style-type: none;
        border-radius: 14px;
        overflow: hidden;

        & > li {
            box-sizing: border-box;
            padding: 13px 16px;
            height: 60px;
            background-color: #ffffff;
            cursor: pointer;
        }

        & > li:not(li:nth-last-child(1)) {
            border-bottom: 1px solid #f5f5f7;
            height: 61px;
        }
    }
`;