import { useEffect, useState } from "react";
import * as s from "./styles";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";



function Users() {
    const [users, setUsers] = useState([]);
    const [refetch, setRefetch] = useState(true);


    useEffect(() => {
        if (refetch) {
            fetch("http://localhost:8080/api/users")
                .then((response) => {
                    console.log(response);
                    response.json()
                        .then((responseBody) => {
                            console.log(responseBody);
                            setUsers(responseBody);
                        });
                });
        }
    }, [refetch]);

    const emptyInputvalues = {
        username: "",
        password: "",
        name: "",
        email: "",
    }

    const [inputvalues, setInputvalues] = useState(emptyInputvalues);

    const handleInputOnChange = (e) => {
        setInputvalues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleUsersOnClick = () => {
        const requestBody = JSON.stringify(inputvalues);
        fetch("http://localhost:8080/api/users", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: requestBody,
        }).then((response) => {
            response.json()
                .then((responseBody) => {
                    alert(responseBody.message);
                    setRefetch(true)
                })
        });
    }

    return (
        <>
            <div>
                <input type="text" title="username" name="username" placeholder="유저이름" value={inputvalues.username} onChange={handleInputOnChange} />
                <input type="text" title="password" name="password" placeholder="비번" value={inputvalues.password} onChange={handleInputOnChange} />
                <input type="text" title="name" name="name" placeholder="이름" value={inputvalues.name} onChange={handleInputOnChange} />
                <input type="text" title="email" name="email" placeholder="이메일" value={inputvalues.email} onChange={handleInputOnChange} />
                <button onClick={handleUsersOnClick}>등록</button>
            </div>
            <table>
                <thead>

                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default Users;