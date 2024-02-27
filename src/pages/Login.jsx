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
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="username"
                value={loginForm.username}
                onChange={onChangeFormData}
            />
            <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={onChangeFormData}
            />
            <button>Effettua il login</button>
        </form>
    );
};

export default Loginpage;
