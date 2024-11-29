import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ThanksForPayingPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const status = queryParams.get("vnp_ResponseCode");
    const orderId = queryParams.get("orderId");

    // Gửi trạng thái giao dịch về backend để cập nhật
    const updatePaymentStatus = async () => {
      try {
        const response = await fetch("http://localhost:8080/payment/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId, status }),
        });

        const data = await response.json();
        if (data.success) {
          setMessage("Payment status updated successfully!");
        } else {
          setMessage("Failed to update payment status.");
        }
      } catch (error) {
        console.error("Error updating payment status:", error);
        setMessage("An error occurred while updating payment status.");
      }
    };

    updatePaymentStatus();
  }, []);



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
