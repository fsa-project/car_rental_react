import React, { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "./MyBooking.scss";
import {
  getUserCarsDetail,
  cancelBooking,
  confirmDeposit,
  getOwnersBooking,
  postConfirmPayment,
} from "../../service/apiService";
import LoadingIcon from "../Loading";
import { useNavigate } from "react-router-dom";

function OwnerViewListBooking() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleBookingDetail = (bookingId) => {
    navigate(`/booking-detail/${bookingId}`);
  };
  const handleConfirmDeposit = async (bookingId) => {
    try {
      await confirmDeposit(bookingId);
      alert(`Booking ${bookingId} has been confirmed deposit!`);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === bookingId ? { ...item, bookingStatus: "Confirmed" } : item
        )
      );
    } catch (error) {
      console.error("Error confirming booking:", error);
      alert("Failed to confirm booking. Please try again.");
    }
  };
  const handleConfirmPayment = async (bookingId) => {
    try {
      await postConfirmPayment(bookingId);
      alert(`Booking ${bookingId} has been confirmed deposit!`);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === bookingId ? { ...item, bookingStatus: "Confirmed" } : item
        )
      );
    } catch (error) {
      console.error("Error confirming booking:", error);
      alert("Failed to confirm booking. Please try again.");
    }
  };
  useEffect(() => {
    const fetchBookingsAndCars = async () => {
      try {
        const bookingResponse = await getOwnersBooking();
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
  //   useEffect(() => {
  //     const fetchUserDetail = async () => {
  //       try {
  //         const response = await getUsersDetail(userId);

  //         if (response?.statusCode === 200 && response.data) {
  //           setWallet(response.data?.wallet);
  //         } else {
  //           console.error("Failed to fetch user detail.");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user detail:", error);
  //       } finally {
  //       }
  //     };

  //     fetchUserDetail();
  //   }, [userId]);
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
          item.id === bookingId ? { ...item, bookingStatus: "Canceled" } : item
        )
      );
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Failed to cancel booking. Please try again.");
    }
  };

  // Pending Deposit - sau khi tạo booking - Cancel
  // Deposit Paid - sau khi renter trả tiền - Cancel
  // Confirmed - owner confirm là đã trả deposit
  // In Progress - sau khi renter confirm - pickup
  // Pending Payment - sau khi return car
  // Payment Paid - sau khi renter trả tiền
  // Completed - sau khi owner xác nhận đã nhận đc tiền
  // Canceled

  // View Detail
  // Cancel
  // confirm deposit
  // confirm payment

  const renderActionButtons = (status, bookingId, paymentMethod) => {
    switch (status) {
      case "Deposit Paid":
        return (
          <>
            <Button
              className="btn-detail"
              onClick={() => handleBookingDetail(bookingId)}
            >
              Confirm Deposit
            </Button>

            <Button
              onClick={() => handleCancel(bookingId)}
              className="btn-danger"
            >
              Cancel
            </Button>
            <Button
              className="btn-detail"
              onClick={() => handleBookingDetail(bookingId)}
            >
              View details
            </Button>
          </>
        );
      case "Canceled":
        return (
          <Button
            className="btn-detail"
            onClick={() => handleBookingDetail(bookingId)}
          >
            View details
          </Button>
        );
      case "Deposit Paid":
        return (
          <>
            <Button
              className="btn-detail"
              onClick={() => handleBookingDetail(bookingId)}
            >
              View details
            </Button>
            <Button
              className="btn-pickup"
              onClick={() => handleConfirmDeposit(bookingId, paymentMethod)}
            >
              Confirm deposit
            </Button>
            <Button
              onClick={() => handleCancel(bookingId)}
              className="btn-danger"
            >
              Cancel
            </Button>
          </>
        );
      case "Pending Payment":
        return (
          <>
            <Button
              className="btn-detail"
              onClick={() => handleBookingDetail(bookingId)}
            >
              View details
            </Button>
          </>
        );
      case "Payment Paid":
        return (
          <>
            <Button
              className="btn-detail"
              onClick={() => handleBookingDetail(bookingId)}
            >
              View details
            </Button>
            <Button
              className="btn-detail"
              onClick={() => handleConfirmPayment(bookingId)}
            >
              Confirm Payment
            </Button>
          </>
        );
      case "Completed":
        return (
          <Button
            className="btn-detail"
            onClick={() => handleBookingDetail(bookingId)}
          >
            View details
          </Button>
        );
      case "Confirmed":
        return (
          <>
            <Button
              className="btn-detail"
              onClick={() => handleBookingDetail(bookingId)}
            >
              View details
            </Button>
          </>
        );
      case "In Progress":
        return (
          <>
            <Button
              className="btn-detail"
              onClick={() => handleBookingDetail(bookingId)}
            >
              View details
            </Button>
          </>
        );
      default:
        return (
          <Button
            className="btn-detail"
            onClick={() => handleBookingDetail(bookingId)}
          >
            View details
          </Button>
        );
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
                        className={`car-info status-${item.bookingStatus.toLowerCase}`}
                      >
                        <strong>Status:</strong> {item.bookingStatus}
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="action-column">
                  {renderActionButtons(
                    item.bookingStatus,
                    item.id,
                    item.paymentMethod
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
}

export default OwnerViewListBooking;
