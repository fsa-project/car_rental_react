import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, ProgressBar } from "react-bootstrap";
import "../pages/AddCarPage.scss";
import BookingDetail from "../components/Booking/BookingDetail";
import Payment from "../components/Booking/Payment";
import Finish from "../components/Car/AddCar/Finish";
import BookingInfo from "../components/Booking/BookingInfo";
import Basic from "../components/Car/AddCar/Basic";
import Pricing from "../components/Car/AddCar/Pricing";
import Detail from "../components/Car/AddCar/Detail";

const AddCarPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      alert("Successfully!");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCancel = () => {
    navigate("/owner-list-car");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Basic />;
      case 2:
        return <Detail />;
      case 3:
        return <Pricing />;
      case 4:
        return <Finish />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <h2>Add a car</h2>
      <div className="booking-page">
        {/* Process Bar */}
        <ProgressBar className="progress position-relative mb-4">
          <div className="progress-bar-label">{`Step ${step} of 4`}</div>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(step / 4) * 100}%` }}
            aria-valuenow={(step / 4) * 100}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </ProgressBar>

        <div className="step-content">{renderStep()}</div>

        <div className="d-flex justify-content-between mt-4">
          {step === 1 && (
            <Button
              variant="warning"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}

          {step !== 1 && step !== 5 && (
            <Button
              variant="warning"
              onClick={handleBack}
            >
              &larr; Back
            </Button>
          )}

          {step === 4 ? (
            <Button
              variant="warning"
              onClick={handleNext}
            >
              Submit
            </Button>
          ) : step !== 4 ? (
            <Button
              variant="warning"
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

export default AddCarPage;
