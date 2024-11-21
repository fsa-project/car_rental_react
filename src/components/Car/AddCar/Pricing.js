import React, { useState } from "react";
import "./Pricing.scss"; // Import file SCSS
import { Col, Row } from "react-bootstrap";

function Pricing() {
  const [terms, setTerms] = useState({
    noSmoking: false,
    noFood: false,
    noPet: false,
    other: false,
    otherDetails: "",
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTerms((prevTerms) => ({
      ...prevTerms,
      [name]: checked,
    }));
  };

  const handleOtherDetailsChange = (event) => {
    const { value } = event.target;
    setTerms((prevTerms) => ({
      ...prevTerms,
      otherDetails: value,
    }));
  };

  return (
    <div className="pricing-container">
      <Row>
        <Col md={4}>
          <h3>Set base price for your car:</h3>
        </Col>
        <Col md={8}>
          <div className="input-group">
            <input
              type="number"
              name="basePrice"
              placeholder="0"
              className="input-field"
            />{" "}
            <div style={{ paddingTop: "6px", fontWeight: "bolder" }}>
              VND/day
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h3>Required deposit:</h3>
        </Col>
        <Col md={8}>
          <div className="input-group">
            <input
              type="number"
              name="deposit"
              placeholder="0"
              className="input-field"
            />{" "}
            <div style={{ paddingTop: "6px", fontWeight: "bolder" }}>VND</div>
          </div>
        </Col>
      </Row>

      <h3>Terms of use</h3>
      <div className="terms-group">
        <label>
          <input
            type="checkbox"
            name="noSmoking"
            onChange={handleCheckboxChange}
          />{" "}
          No smoking
        </label>
        <label>
          <input
            type="checkbox"
            name="noFood"
            onChange={handleCheckboxChange}
          />{" "}
          No food in car
        </label>
        <label>
          <input type="checkbox" name="noPet" onChange={handleCheckboxChange} />{" "}
          No pet
        </label>
        <label>
          <input type="checkbox" name="other" onChange={handleCheckboxChange} />{" "}
          Other
        </label>
        {terms.other && (
          <textarea
            name="otherDetails"
            placeholder="Please specify..."
            className="textarea-field"
            onChange={handleOtherDetailsChange}
          ></textarea>
        )}
      </div>
    </div>
  );
}

export default Pricing;
