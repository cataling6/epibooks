import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [loginFrom, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const onChangeFormData = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginFrom,
            [name]: value,
        })
    }
    const onSubmit = async () => {
        await axios.post("https://dummyjson.com/auth/login", loginFrom).then((response) => {
            //await axios.post("https://dummyjson.com/auth/login", loginFrom).then((response) => {
            if (response.status === 200) {
                localStorage.setItem("auth", JSON.stringify(response.data));
            }
        }).catch((error) => console.log(error))
    };
    return (
        <form on onSubmit={onSubmit}>
            <input type="text" name="username" value={loginFrom.username} onChange={onChangeFormData} />
            <input type="text" name="password" value={loginFrom.password} onChange={onChangeFormData} />
            <button>login</button>
        </form>
    )
}

export default Login
