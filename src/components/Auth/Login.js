import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.scss";
import ForgotPass from "./ForgotPass.js";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData.email, formData.password);
  };

  return (
    <Container>
      <Row style={{ paddingTop: "30px", paddingBottom: "80px" }}>
        {/* Form Đăng Nhập */}
        <h4>LOG IN USING YOUR ACCOUNT</h4>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="loginEmail" className="mb-3">
            <Form.Label>Your email address</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
          <Form.Group controlId="loginPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
          <Link to="/forgot" className="forgot-password-link">
            Forgot Password?
          </Link>

          <br />
          <br />

          <Button
            style={{
              backgroundColor: "#ffc107",
              color: "#000",
              border: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "0.8rem 1.6rem",
              transition: "all 0.3s ease",
            }}
            variant="primary"
            type="submit"
            className="w-100 custom-btn"
          >
            <i className="bi bi-person-fill"></i> LOG IN
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
