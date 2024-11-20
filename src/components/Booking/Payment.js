import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentSelection = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmPayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
    } else {
      alert(`You selected: ${paymentMethod}`);
    }
  };

  return (
    <div>
      <h4>Step 2: Payment</h4>
      <Row className="mb-4">
        <Col md={4}>
          <h5>Nissan Navara El 2017</h5>
          <p>Rating: ★★★☆☆</p>
          <p>No. of rides: 0</p>
          <p>Price: 900k/day</p>
          <p>Location: Cau Giay, Hanoi</p>
          <p style={{ color: "green" }}>Status: Available</p>
        </Col>
        <Col md={4}>
          <h5>Booking Summary</h5>
          <p>Number of days: 15</p>
          <p>Price per day: 900,000 VND</p>
          <p>Total: 13,500,000 VND</p>
          <p>Deposit: 15,000,000 VND</p>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5>Please select your payment method</h5>
          <Form>
            <Form.Check
              type="radio"
              id="my-wallet"
              name="paymentMethod"
              label={
                <>
                  My wallet <br />
                  <span style={{ color: "green" }}>
                    Current balance: 20,000,000 VND
                  </span>
                </>
              }
              value="My wallet"
              onChange={handlePaymentSelection}
            />
            <Form.Check
              type="radio"
              id="cash"
              name="paymentMethod"
              label={
                <>
                  Cash <br />
                  <span style={{ fontStyle: "italic" }}>
                    Our operator will contact you for further instructions
                  </span>
                </>
              }
              value="Cash"
              onChange={handlePaymentSelection}
            />
            <Form.Check
              type="radio"
              id="bank-transfer"
              name="paymentMethod"
              label={
                <>
                  Bank transfer <br />
                  <span style={{ fontStyle: "italic" }}>
                    Our operator will contact you for further instructions
                  </span>
                </>
              }
              value="Bank transfer"
              onChange={handlePaymentSelection}
            />
          </Form>
        </Col>
      </Row>

      <div className="d-flex justify-content-between mt-4"></div>

      <p className="mt-3" style={{ fontStyle: "italic" }}>
        The deposit amount will be deducted from your wallet.
      </p>
    </div>
  );
};

export default Payment;
