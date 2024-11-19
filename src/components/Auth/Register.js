import { Button, Col, Form, Row } from "react-bootstrap";
import "./Login.scss";
import React from "react";
import { FaClock } from "react-icons/fa";

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
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <div className="select-row">
          <Form.Check
            type="radio"
            label="I want to rent a car"
            name="userType"
            value="renter"
            onChange={handleChange}
            className="mb-2"
            checked={formData.userType === "renter"}
          />
          <Form.Check
            type="radio"
            label="I am a car owner"
            name="userType"
            value="owner"
            onChange={handleChange}
            className="mb-3"
            checked={formData.userType === "owner"}
          />
        </div>
        <div className="select-row">
          <Form.Check
            type="checkbox"
            label="I have read and agree with the Terms and Conditions"
            name="agreeToTerms"
            onChange={handleChange}
            checked={formData.agreeToTerms}
            className="mb-3"
          />
          <a href="/terms" className="terms-link">
            Terms of Use
          </a>
        </div>
        <Button
          style={{
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "0.8rem 1.6rem",
            transition: "all 0.3s ease",
          }}
          variant="warning"
          type="submit"
          className="custom-btn w-100"
          disabled={!formData.agreeToTerms}
        >
          SIGN UP
        </Button>
      </Form>
    </div>
  );
}

export default Register;
