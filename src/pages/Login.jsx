import React, { useState, useEffect } from "react";
// import { axios } from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Loginpage = () => {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const onChangeFormData = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    };

    useEffect(() => {

        if (error)
            new Swal({
                title: 'Credenziali errate! ',
                text: "Verifica i dati inseriti",
                icon: 'error',
                showLoaderOnConfirm: true,
                willClose: () => {
                    setError(null)
                    console.log(error);
                }
            });

    }, [error])
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginForm),
            });

            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem("auth", JSON.stringify(data));
                navigate("/home");
            }
            else if (response.status === 400) {
                setError(true);
                console.log("sono dentro");
            }
        } catch (er) {
            // setError(er);
            // console.log(error);
            //non so per quale motivo prima di caricare il compito questo catch non mi setta più l'errore... ho gestito l'errore soipra con else if
        }

        // await axios
        //     .post("https://dummyjson.com/auth/login", loginForm)
        //     .then((response) => {
        //         if (response.status === 200) {
        //             localStorage.setItem("auth", JSON.stringify(response.data));
        //             navigate("/home");
        //         }
        //     })
        //     .catch((error) => setError(error));
    };

    return (
        <>
            <h1 className="text-center">benvenuto nel mio Epicbooks</h1>
            <div className="container w-25 p-5" >
                <form onSubmit={onSubmit} className="form-control row gy-2">
                    <label> <b>Username:</b> - kminchelle</label>
                    <input
                        data-testid="username"
                        className="form-control"
                        type="text"
                        name="username"
                        value={loginForm.username}
                        onChange={onChangeFormData}
                    />
                    <label><b>Password:</b> - 0lelplR</label>
                    <input
                        data-testid="password"
                        className="form-control"
                        type="password"
                        name="password"
                        value={loginForm.password}
                        onChange={onChangeFormData}
                    />
                    <button className="btn btn-primary" data-testid="btnLogin">Login</button>
                </form >
            </div >

            <h2 className="text-center">per accedere inserisci le credenziali fake visibili sopra; se le sbagli, c'è la sorpresa :D </h2>
        </>
    );
};

export default Loginpage;
