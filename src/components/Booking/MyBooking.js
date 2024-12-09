import React, { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "./MyBooking.scss";
import {
  getUserCarsDetail,
  getUsersBooking,
  cancelBooking,
} from "../../service/apiService";
import LoadingIcon from "../Loading";

function MyBooking() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookingsAndCars = async () => {
      try {
        const bookingResponse = await getUsersBooking();
        if (bookingResponse && bookingResponse.statusCode === 200) {
          const bookings = bookingResponse.data.result;

          const carPromises = bookings.map((booking) =>
            booking.carId
              ? getUserCarsDetail(booking.carId)
              : Promise.resolve(null)
          );

          const carDetails = await Promise.all(carPromises);

          const combinedData = bookings.map((booking, index) => {
            const carDetail = carDetails[index];
            return {
              ...booking,
              car: carDetail?.data || null,
            };
          });

          setData(combinedData);
        } else {
          console.error("Failed to fetch bookings");
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching bookings and cars:", error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookingsAndCars();
  }, []);

  const calculateDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = (days, basePrice) => {
    return days * basePrice;
  };

  const handleCancel = async (bookingId) => {
    try {
      // Call
      cancelBooking(bookingId);
      alert(`Booking ${bookingId} has been cancelled!`);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === bookingId ? { ...item, bookingStatus: "CANCELLED" } : item
        )
      );
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Failed to cancel booking. Please try again.");
    }
  };

  const renderActionButtons = (status, bookingId) => {
    switch (status) {
      case "Awaiting Pickup Confirmation":
        return (
          <>
            <Button className="btn-detail">View details</Button>
            <Button className="btn-pickup">Confirm pick-up</Button>
            <Button
              onClick={() => handleCancel(bookingId)}
              className="btn-danger"
            >
              Cancel
            </Button>
          </>
        );
      case "CANCELLED":
        return <Button className="btn-detail">View details</Button>;
      default:
        return <Button className="btn-detail">View details</Button>;
    }
  };

  return (
    <Container>
      <h1 className="text-center">My Bookings</h1>

      {isLoading ? (
        <LoadingIcon />
      ) : (
        <div className="table-container">
          {data.map((item) => {
            const days = calculateDays(item.startDateTime, item.endDateTime);
            const basePrice = item.car?.basePrice || 0;
            const total = calculateTotal(days, basePrice);
            const deposit = item.car?.deposit || "N/A";
            return (
              <div key={item.id} className="row-item">
                <div className="image-column">
                  {item.car?.images?.[0] ? (
                    <img
                      src={item.car.images[0]}
                      alt={item.car.name || "Car"}
                      className="car-image"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <div className="details-column">
                  <Row>
                    <Col md={6}>
                      <h5 className="car-title">
                        {item.car?.name || "Unknown Car"}
                      </h5>
                      <p className="car-info">
                        <strong>From:</strong>{" "}
                        {new Date(item.startDateTime).toLocaleString()}
                      </p>
                      <p className="car-info">
                        <strong>To:</strong>{" "}
                        {new Date(item.endDateTime).toLocaleString()}
                      </p>
                      <p className="car-info">
                        <strong>Number of days:</strong> {days}
                      </p>
                    </Col>
                    <Col md={6}>
                      <p className="car-info">
                        <strong>Base price:</strong> {basePrice} đ
                      </p>
                      <p className="car-info">
                        <strong>Total:</strong> {total} đ
                      </p>
                      <p className="car-info">
                        <strong>Deposit:</strong> {deposit}
                      </p>
                      <p className="car-info">
                        <strong>Booking No:</strong> {item.id}
                      </p>
                      <p
                        className={`car-info status-${item.bookingStatus.toLowerCase()}`}
                      >
                        <strong>Status:</strong> {item.bookingStatus}
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="action-column">
                  {renderActionButtons(item.bookingStatus, item.id)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
}

export default MyBooking;
