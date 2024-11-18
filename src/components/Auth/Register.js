import { Button, Col, Form, Row } from "react-bootstrap";
import "./Login.scss";
import React from "react";

function Register() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
    userType: "",
    agreeToTerms: false,
  });

  const handleSignup = (e) => {
    console.log(formData);
    e.preventDefault();
    if (formData.newPassword === formData.confirmPassword) {
      console.log("Signing up with:", formData);
    } else {
      alert("Passwords do not match");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="register-container">
      <h4>NOT A MEMBER YET?</h4>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="signupName" className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="signupEmail" className="mb-3">
          <Form.Label>Your email address</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <Form.Control
              type="email"
              placeholder="Your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="signupPhone" className="mb-3">
          <Form.Label>Your phone number</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-telephone"></i>
            </span>
            <Form.Control
              type="text"
              placeholder="Your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="signupPassword" className="mb-3">
          <Form.Label>Pick a password</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-lock"></i>
            </span>
            <Form.Control
              type="password"
              placeholder="Pick a password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <Form.Text className="text-muted">
            Use at least one letter, one number, and seven characters.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="mb-3">
          <Form.Label>Confirm password</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-lock"></i>
            </span>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Row>
          <Col md={7}>
            <Form.Check
              type="radio"
              label="I want to rent a car"
              name="userType"
              value="renter"
              onChange={handleChange}
              className="mb-2"
              checked={formData.userType === "renter"}
            />
          </Col>
          <Col md={5}>
            <Form.Check
              type="radio"
              label="I am a car owner"
              name="userType"
              value="owner"
              onChange={handleChange}
              className="mb-3"
              checked={formData.userType === "owner"}
            />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Form.Check
              type="checkbox"
              label="I have read and agree with the Terms and Conditions"
              name="agreeToTerms"
              onChange={handleChange}
              checked={formData.agreeToTerms}
              className="mb-3"
            />
          </Col>
          <Col md={4}>
            <a href="/terms" className="terms-link">
              Terms of Use
            </a>
          </Col>
        </Row>
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
          type="submit"
          className="custom-btn w-100"
          disabled={!formData.agreeToTerms}
        >
          <i className="bi bi-person-plus-fill"></i> SIGN UP
        </Button>
      </Form>
    </div>
  );
}

export default Register;
