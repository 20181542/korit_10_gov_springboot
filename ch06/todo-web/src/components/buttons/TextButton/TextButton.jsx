import * as s from "./styles";

function TextButton({chlidren, onClick, disabled, weight}) {

    return (
        <button css={s.button(weight)} onClick={onclick} disabled={disabled}>
            {chlidren}
        </button>
    )
}

export default TextButton;