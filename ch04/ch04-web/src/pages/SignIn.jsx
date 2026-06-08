import { useState } from "react";
import { Link } from "react-router";
import { useSignIn } from "../hooks/useAuth";



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
        <>
            <h1>로그인</h1>
            <ul>
                <Link to={"/auth/signup"}>회원가입</Link>
            </ul>
            <div>
                <div>
                    <input type="text" name="username" placeholder="사용자이름" value={inputValues.username} onChange={handleInputOnChang} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="비밀번호" value={inputValues.password} onChange={handleInputOnChang} />
                </div>
                <button onClick={handleSigninOnClick} >로그인</button>
            </div>
        </>
    )
}

export default SignIn;