import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate để điều hướng
import { Button, Container, ProgressBar } from "react-bootstrap";
import "../pages/BookingPage.scss";
import BookingDetail from "../components/Booking/BookingDetail";
import Payment from "../components/Booking/Payment";
import Finish from "../components/Booking/Finish";
import BookingInfo from "../components/Booking/BookingInfo";
import { getUserCarsDetail, postANewBooking } from "../service/apiService";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { carId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [carDetail, setCarDetail] = useState("");

  const [requestBody, setRequestBody] = useState({
    startDateTime: "2024-11-28T10:00:00Z",
    endDateTime: "2024-11-28T14:00:00Z",
    driversInformation: "John Doe, License No: ABC12345",
    paymentMethod: "VNPAY",
  });

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

  const handleSubmitBooking = async () => {
    try {
      const response = await postANewBooking(carId, requestBody);
      console.log("Booking successful:", response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };

  const [imageURLs, setImageURLs] = useState([]);

  const fetchImages = async (imageApis) => {
    try {
      const imagePromises = imageApis.map((api) =>
        fetch(`http://localhost:8386${api}`).then((res) => {
          if (res.ok) {
            return res.blob();
          }

          throw new Error("Failed to fetch image");
        })
      );
      const blobs = await Promise.all(imagePromises);
      const urls = blobs.map((blob) => URL.createObjectURL(blob));
      setImageURLs(urls);

      // Cleanup URLs on unmount
      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await getUserCarsDetail(carId);
        if (response && response.statusCode === 200) {
          setCarDetail(response.data);
          if (response.data.images?.length) {
            await fetchImages(response.data.images);
          }
        } else {
          console.error("Failed to fetch car details.");
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarDetail();
  }, [carId]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BookingDetail
          carDetail={carDetail}
          requestBody={requestBody}
          setRequestBody={setRequestBody}
          imageURLs={imageURLs}
        />;
      case 2:
        return <Payment
          carDetail={carDetail}
          requestBody={requestBody}
          setRequestBody={setRequestBody}
        />;
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
