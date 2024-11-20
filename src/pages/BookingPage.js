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
    navigate("/carDetail");
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

        {/* Step Content */}
        <div className="step-content">{renderStep()}</div>

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-between mt-4">
          {/* Nút Cancel chỉ hiển thị ở bước 1 */}
          {step === 1 && (
            <Button
              style={{
                backgroundColor: "#f1ac00", // Màu đỏ cho nút hủy
                color: "black",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}

          {/* Nút Back */}
          {step !== 1 ? (
            <Button
              style={{
                backgroundColor: "#f1ac00",
                color: "black",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={handleBack}
            >
              &larr; Back
            </Button>
          ) : (
            <div />
          )}

          <Button
            style={{
              backgroundColor: "#f1ac00",
              color: "black",
              border: "none",
              fontWeight: "bold",
            }}
            onClick={handleNext}
          >
            {step === 3 ? "Confirm" : "Next →"}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default BookingPage;
