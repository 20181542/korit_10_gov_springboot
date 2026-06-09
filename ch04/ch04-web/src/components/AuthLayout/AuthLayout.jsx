import * as s from "./styles";

function AuthLayout({ children }) {
    return (
        <div css={s.layoutContainer}>
            <div css={s.cardWrapper}>
                <div css={s.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
