import { css } from "@emotion/react";

export const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: #090a0f; /* Deep space dark */
        color: #ffffff;
        overflow-x: hidden;
    }

    * {
        box-sizing: border-box;
    }

    /* Scrollbar Styling for premium feel */
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #090a0f;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(144, 19, 254, 0.5);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 212, 255, 0.8);
    }
`;
