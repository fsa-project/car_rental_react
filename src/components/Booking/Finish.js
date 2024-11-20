import React from "react";
import { Button, Container } from "react-bootstrap";

const Finish = () => {
  const bookingDetails = {
    carName: "Nissan Navara El 2017",
    startDate: "13/02/2022 - 12:00 PM",
    endDate: "23/02/2022 - 14:00 PM",
    bookingNumber: "012345",
  };

  return (
    <Container className="text-center">
      <h4>You’ve successfully booked {bookingDetails.carName}</h4>
      <p>
        From <strong>{bookingDetails.startDate}</strong> to{" "}
        <strong>{bookingDetails.endDate}</strong>.
      </p>
      <p>
        Your booking number is: <strong>{bookingDetails.bookingNumber}</strong>
      </p>
      <p>Our operator will contact you with further guidance about pickup.</p>

      <div className="mt-4">
        <Button
          variant="link"
          href="/"
          style={{ textDecoration: "underline", marginRight: "1px" }}
        >
          Go to homepage
        </Button>
        <Button
          variant="secondary"
          href="/car-list"
          style={{
            backgroundColor: "#ffc107",
            color: "#333",
            border: "none",
            marginRight: "10px",
          }}
        >
          Book another car
        </Button>
        <Button
          variant="primary"
          href="/view-booking"
          style={{
            backgroundColor: "white",
            color: "#333",
            border: "1pt solid #333",
          }}
        >
          View Booking
        </Button>
      </div>
    </Container>
  );
};

export default Finish;
