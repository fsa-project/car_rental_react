import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../Auth/Login.scss";
import { useNavigate } from "react-router-dom";

import BackgroundImage from "../../assets/login_background.jpg";
import Logo from "../../assets/logo51.png";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import doLogin from "../../redux/action/userAction";
import { postLogin } from "../../service/apiService";


const Login = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);
        let data = await postLogin(inputEmail, inputPassword);
        console.log(data);

        if (data && data.error === null) {
            setShowSuccess(true);
            //dispatch
            dispatch(doLogin(data));
            toast.success(data.message);
            await delay(500);
            navigate("/");
        }
        if (data && data.error !== null) {
            setShow(true);
        }
        setLoading(false);
    };

    const handlePassword = () => { };

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const handleRegister = () => {
        navigate("/register");
    }


    return (

        <>
            <div className="bg" style={{ backgroundImage: `url(${BackgroundImage})` }}>

            </div>
            <div
                className="sign-in__wrapper"

            >
                <div className="sign-in__header w-100 mb-2 position-absolute top-0 start-50 translate-middle-x text-white text-end">
                    <span>Don't have an account yet?</span>
                    <Button variant="outline-warning" onClick={handleRegister}>Sign Up</Button>
                </div>
                <div className="sign-in__backdrop"></div>


                <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
                    <img
                        className="img-thumbnail mx-auto d-block mb-2"
                        src={Logo}
                        alt="logo"
                    />
                    <div className="h4 mb-2 text-center">Sign In</div>
                    {show ? (
                        <Alert
                            className="mb-2"
                            variant="danger"
                            onClose={() => setShow(false)}
                            dismissible
                        >
                            Incorrect username or password.
                        </Alert>
                    ) : (
                        <div />
                    )}

                    {showSuccess ? (
                        <Alert
                            className="mb-2"
                            variant="success"
                            onClose={() => setShowSuccess(false)}
                            dismissible
                        >
                            Login success.
                        </Alert>
                    ) : (
                        <div />
                    )}
                    <Form.Group className="mb-2" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            value={inputEmail}
                            placeholder="Email"
                            onChange={(e) => setInputEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={inputPassword}
                            placeholder="Password"
                            onChange={(e) => setInputPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="checkbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    {!loading ? (
                        <Button className="w-100" variant="warning" type="submit">
                            Log In
                        </Button>
                    ) : (
                        <Button className="w-100" variant="warning" type="submit" disabled>
                            Logging In...
                        </Button>
                    )}
                    <div className="d-grid justify-content-end">
                        <Button
                            className="text-muted px-0"
                            variant="link"
                            onClick={handlePassword}
                        >
                            Forgot password?
                        </Button>
                        <Button
                            className="text-muted px-0"
                            variant="link"
                            onClick={() => { navigate('/') }}
                        >
                            Back to Homepage
                        </Button>
                    </div>
                </Form>
            </div>
        </>

    );
};

export default Login;