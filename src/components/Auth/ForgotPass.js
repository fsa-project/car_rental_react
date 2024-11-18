import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ForgotPass = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <Row className="w-100">
        <Col md={6} className="mx-auto text-center">
          <h3>Reset Password</h3>
          <p>
            Enter the email address associated with your account, and we’ll
            email you with the link to reset your password.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Your email address" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{
                backgroundColor: "#ffc107",
                color: "black",
                fontStyle: "bold",
              }}
            >
              <span role="img" aria-label="lock">
                🔒
              </span>{" "}
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPass;
