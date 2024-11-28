import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ThanksForPayingPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <Row className="w-100">
        <Col md={6} className="mx-auto text-center">
          <h3>Thank You!</h3>
          <p>Your payment has been successfully processed.</p>
          <p>
            We appreciate your trust in our service. You can now enjoy the car
            you've booked. If you have any questions or need support, feel free
            to contact us.
          </p>
          <Button
            variant="primary"
            onClick={() => {
              window.location.href = "/list-car";
            }}
            style={{
              backgroundColor: "#ffc107",
              color: "black",
              fontStyle: "bold",
              border: "none",
            }}
          >
            <span role="img" aria-label="car">
              🚗
            </span>{" "}
            Go to Dashboard
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ThanksForPayingPage;
