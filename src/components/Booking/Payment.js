import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";

const Payment = (props) => {
  const { carDetail, requestBody, setRequestBody } = props;
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentSelection = (event) => {
    setPaymentMethod(event.target.value);
    setRequestBody({
      ...requestBody, [event.target.name]: event.target.value
    });
    //console.log(event.target.value);
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
          <h5>{carDetail.name}</h5>
          <p>Rating: ★★★☆☆</p>
          <p>No. of rides: 0</p>
          <p>Price: {carDetail.basePrice}/day</p>
          <p>Location: {carDetail.address}</p>
          <p style={{ color: "green" }}>Status: Available</p>
        </Col>
        <Col md={4}>
          <h5>Booking Summary</h5>
          <p>Number of days: 1</p>
          <p>Price per day: {carDetail.basePrice} VND</p>
          <p>Total: {carDetail.basePrice} VND</p>
          <p>Deposit: {carDetail.deposit} VND</p>
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
              value="wallet"
              label={
                <>
                  My wallet <br />
                  <span style={{ color: "green" }}>
                    Current balance: 20,000,000 VND
                  </span>
                </>
              }
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
              value="vnpay"
              label={
                <>
                  Bank transfer <br />
                  <span style={{ fontStyle: "italic" }}>
                    Our operator will contact you for further instructions
                  </span>
                </>
              }
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
