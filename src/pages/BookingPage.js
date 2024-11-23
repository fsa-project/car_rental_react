import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng
import { Button, Container, ProgressBar } from "react-bootstrap";
import "../pages/BookingPage.scss";
import BookingDetail from "../components/Booking/BookingDetail";
import Payment from "../components/Booking/Payment";
import Finish from "../components/Booking/Finish";
import BookingInfo from "../components/Booking/BookingInfo";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert("Successfully!");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCancel = () => {
    navigate("/carDetails");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BookingDetail />;
      case 2:
        return <Payment />;
      case 3:
        return <Finish />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <BookingInfo />
      <div className="booking-page">
        {/* Process Bar */}
        <ProgressBar className="progress position-relative mb-4">
          <div className="progress-bar-label">{`Step ${step} of 3`}</div>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(step / 3) * 100}%` }}
            aria-valuenow={(step / 3) * 100}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </ProgressBar>

        <div className="step-content">{renderStep()}</div>

        <div className="d-flex justify-content-between mt-4">
          {step === 1 && (
            <Button
              style={{
                backgroundColor: "#f1ac00",
                color: "#fff",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}

          {step !== 1 && step !== 3 && (
            <Button
              style={{
                backgroundColor: "#f1ac00",
                color: "#fff",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={handleBack}
            >
              &larr; Back
            </Button>
          )}

          {step === 2 ? (
            <Button
              style={{
                backgroundColor: "#f1ac00",
                color: "#fff",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={handleNext}
            >
              Confirm
            </Button>
          ) : step !== 3 ? (
            <Button
              style={{
                backgroundColor: "#f1ac00",
                color: "#fff",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={handleNext}
            >
              Next →
            </Button>
          ) : null}
        </div>
      </div>
    </Container>
  );
};

export default BookingPage;
