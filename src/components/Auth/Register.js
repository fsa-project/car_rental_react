import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../Auth/Login.scss";
import { useNavigate } from "react-router-dom";

import BackgroundImage from "../../assets/login_background.jpg";
import Logo from "../../assets/logo51.png";
import { toast } from "react-toastify";
import { postRegister } from "../../service/apiService";

const Register = () => {
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputRole, setInputRole] = useState("");


    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);
        let data = await postRegister(inputEmail, inputPassword, inputName, inputPhone, inputRole);
        console.log(data);

        if (data && data.EC === 0) {
            setShowSuccess(true);
            toast.success(data.EM);
            await delay(500);
            navigate("/");
        }
        if (data && data.EC !== 0) {
            setShow(true);
        }
        setLoading(false);
    };

    const handleLogin = () => {
        navigate("/login");
    }

    const handlePassword = () => { };

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <>
            <div className="bg" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
            <div
                className="sign-in__wrapper"
            >
                <div className="sign-in__header w-100 mb-2 position-absolute top-0 start-50 translate-middle-x text-white text-end">
                    <span>Already have an account?</span><Button variant="outline-warning" onClick={handleLogin}>Sign In</Button>
                </div>
                <div className="sign-in__backdrop"></div>


                <Form className="shadow p-4 bg-white rounded register" onSubmit={handleSubmit}>
                    <img
                        className="img-thumbnail mx-auto d-block mb-2"
                        src={Logo}
                        alt="logo"
                    />
                    <div className="h4 mb-2 text-center">Sign Up</div>
                    {show ? (
                        <Alert
                            className="mb-3"
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
                            className="mb-3"
                            variant="success"
                            onClose={() => setShowSuccess(false)}
                            dismissible
                        >
                            Register success.
                        </Alert>
                    ) : (
                        <div />
                    )}
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control
                            type="text"
                            value={inputName}
                            placeholder="Name"
                            onChange={(e) => setInputName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                            type="text"
                            value={inputEmail}
                            placeholder="Email"
                            onChange={(e) => setInputEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Phone*</Form.Label>
                        <Form.Control
                            type="text"
                            value={inputPhone}
                            placeholder="Phone"
                            onChange={(e) => setInputPhone(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password*</Form.Label>
                        <Form.Control
                            type="password"
                            value={inputPassword}
                            placeholder="Password"
                            onChange={(e) => setInputPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="text"
                            value={inputConfirmPassword}
                            placeholder="Confirm password"
                            onChange={(e) => setInputConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 choose-role">
                        <Form.Check
                            type='radio'
                            label="I want to rent a car"
                            name="group1"
                            id="radio1"
                            inline
                        />
                        <Form.Check
                            inline
                            name="group1"
                            type='radio'
                            label="I am a car owner"
                            id="radio2"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="checkbox">
                        <Form.Check type="checkbox" label="I have read and agree with the Term" />
                    </Form.Group>
                    {!loading ? (
                        <Button className="w-100" variant="warning" type="submit">
                            Register
                        </Button>
                    ) : (
                        <Button className="w-100" variant="warning" type="submit" disabled>
                            Register In...
                        </Button>
                    )}
                    <div className="d-grid justify-content-end">
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

export default Register;