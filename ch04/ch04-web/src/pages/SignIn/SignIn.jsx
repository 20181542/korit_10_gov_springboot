import { useState } from "react";
import { Link } from "react-router";
import { useSignIn } from "../../hooks/useAuth";
import * as s from "./styles";
import AuthLayout from "../../components/AuthLayout/AuthLayout";

function SignIn() {
    const emptyInputValues= {
        username: "",
        password: "",
    }

    const [inputValues, setInputValues] = useState(emptyInputValues);
    const signInMutation = useSignIn();

    const handleInputOnChang = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSigninOnClick = async () => {
        await signInMutation.mutateAsync(inputValues);
        setInputValues(emptyInputValues);
    }

    return (
        <AuthLayout>
            <h1>로그인</h1>
            <ul>
                <Link to={"/auth/signup"}>계정이 없으신가요? 회원가입</Link>
            </ul>
            <div>
                <div css={s.inputContainer}>
                    <input css={s.input} type="text" name="username" placeholder="사용자이름" value={inputValues.username} onChange={handleInputOnChang} />
                </div>
                <div css={s.inputContainer}>
                    <input css={s.input} type="password" name="password" placeholder="비밀번호" value={inputValues.password} onChange={handleInputOnChang} />
                </div>
                <button css={s.button} onClick={handleSigninOnClick} >로그인</button>
            </div>
        </AuthLayout>
    )
}

export default SignIn;
