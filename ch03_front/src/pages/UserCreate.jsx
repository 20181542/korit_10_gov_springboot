import axios from "axios";
import { useState } from "react";




function UserCreate() {
    const emptyUser = {
        username: "",
        password: "",
        name: "",
        email: ""
    }
    const [inputvalues, setInputvalues] = useState(emptyUser);

    const handleInputOnChange = (e) => {
        setInputvalues(prev => ({
            ...prev,
            [e.target.name] : e.target.value,
        }));
    }

    const handleRegisterPromiseOnClick = () => {
        axios.post("http://localhost:8080/api/users", inputvalues)
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error.response)});
    }

    const handleRegisterAsyncOnClick = async () => {
        let response = null;
        try{
            response = await axios.post("http://localhost:8080/api/users", inputvalues)
        }catch (error) {
            response = error.response;
        }
        console.log(response);
        
    }

    return(
        <>
            <div>
                <input type="text" name="username" placeholder="사용자이름" value={inputvalues.username} onChange={handleInputOnChange} />
            </div>
            <div>
                <input type="password" name="password" placeholder="비빌번호" value={inputvalues.password} onChange={handleInputOnChange} />
            </div>
            <div>
                <input type="text" name="name" placeholder="성명" value={inputvalues.name} onChange={handleInputOnChange} />
            </div>
            <div>
                <input type="text" name="email" placeholder="이메일" value={inputvalues.email} onChange={handleInputOnChange} />
            </div>
            <button onClick={handleRegisterPromiseOnClick}>Promise등록</button>
            <button onClick={handleRegisterAsyncOnClick}>Async등록</button>
        </>
    )
}

export default UserCreate;