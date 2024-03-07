import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Loginpage = () => {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const onChangeFormData = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("https://dummyjson.com/auth/login", loginForm)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("auth", JSON.stringify(response.data));
                    navigate("/home");

                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="container" >
            <form onSubmit={onSubmit} className="form-control row gy-2">
                <label> <b>Username:</b> - kminchelle</label>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={loginForm.username}
                    onChange={onChangeFormData}
                />
                <label><b>Password:</b> - 0lelplR</label>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={loginForm.password}
                    onChange={onChangeFormData}
                />
                <button className="btn btn-primary">Login</button>
            </form >
        </div >
    );
};

export default Loginpage;
