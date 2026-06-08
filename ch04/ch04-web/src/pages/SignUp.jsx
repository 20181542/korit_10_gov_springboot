import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSignUp } from "../hooks/useAuth";


function SignUp() {
    const REGEX = {
  // 영문 소문자/숫자/언더스코어, 4~20자, 첫 글자는 영문
  username: /^[a-z][a-z0-9_]{3,19}$/,

  // 영문 대소문자 + 숫자 + 특수문자 각 1개 이상, 8~20자
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,

  // 한글 2~10자 또는 영문 2~30자 (공백 일부 허용)
  name: /^[가-힣]{2,10}$|^[a-zA-Z\s]{2,30}$/,

  // 표준 이메일
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
    

    const emptyInputs= {
        username: "",
        password: "",
        confirmpassword: "",
        name: "",
        email: ""
    }

    const [inputValues, setInputValues] = useState(emptyInputs);
    const [inputErrors, setInputErrors] = useState(emptyInputs);
    const [signUpDisabled, setSignUpDisabled] = useState(true);

    const signUpMutation = useSignUp();

    const handleInputOnChang = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    }

    const handleSignUpOnClick = async () => {
        await signUpMutation.mutateAsync(inputValues);
        setInputValues(emptyInputs);
    }

    const validate = ({username, password, confirmpassword, name, email}) => {
        const errors = {};
        if (!REGEX.username.test(username) && !!username) {
            errors.username = "영문 소문자로 시작, 4~20자 (숫자,특수문자 -, _ 포함가능)"
        }
        if (!REGEX.password.test(password) && !!password) {
            errors.password = "영문,숫자, 특수문자 포함 8~20자"
        }
        if (password !== confirmpassword && !!confirmpassword) {
            errors.confirmpassword = "비밀번호가 일치하지 않습니다."
        }
        if (!REGEX.name.test(name) && !!name) {
            errors.name = "이름을 정확이 입력해주세요"
        }
        if (!REGEX.email.test(email) && !!email) {
            errors.email = "올바른 이메일 형식이 아닙니다."
        }

        return errors;
    }
    useEffect(() => {  
        setInputErrors(validate(inputValues));

    }, [inputValues])

    useEffect(() => {
        const inputEmptyValuesEntries = Object.values(inputValues).filter(value => !value);
        const inputErrosEntries = Object.entries(inputErrors);
        setSignUpDisabled(inputEmptyValuesEntries.length > 0 || inputErrosEntries.length > 0);
        
    }, [inputErrors])





    return (
        <>
            <h1>회원가입</h1>
            <ul>
                <Link to={"/auth/signin"}>로그인</Link>
            </ul>
            <div>
                <div>
                    <input type="text" name="username" placeholder="사용자이름" value={inputValues.username} onChange={handleInputOnChang} />
                    <div>{inputErrors.username}</div>
                </div>
                <div>
                    <input type="password" name="password" placeholder="비밀번호" value={inputValues.password} onChange={handleInputOnChang} />
                    <div>{inputErrors.password}</div>
                </div>
                <div>
                    <input type="password" name="confirmpassword" placeholder="비밀번호확인" value={inputValues.confirmpassword} onChange={handleInputOnChang} />
                    <div>{inputErrors.confirmpassword}</div>
                </div>
                <div>
                    <input type="text" name="name" placeholder="이름" value={inputValues.name} onChange={handleInputOnChang} />
                    <div>{inputErrors.name}</div>
                </div>
                <div>
                    <input type="text" name="email" placeholder="이메일" value={inputValues.email} onChange={handleInputOnChang} />
                    <div>{inputErrors.email}</div>
                </div>
                <button disabled={signUpDisabled} onClick={handleSignUpOnClick} >회원가입</button>
            </div>
        </>
    )
}

export default SignUp;