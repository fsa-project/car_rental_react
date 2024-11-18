import React from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../components/Auth/Login.scss";

function AuthPage() {
  return (
    <Container className="p-4 login-container">
      <br></br>
      <br></br>
      <Row>
        <Col md={5} className="d-flex flex-column">
          <Login />
        </Col>
        {/* Line */}
        <Col
          md={1}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="divider"></div>
        </Col>
        <Col md={6} className="d-flex flex-column">
          <Register />
        </Col>
      </Row>
      <br></br>
      <br></br>
    </Container>
  );
}

export default AuthPage;
