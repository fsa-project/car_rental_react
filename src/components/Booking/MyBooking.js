import React, { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "./MyBooking.scss";
import {
  getUserCarsDetail,
  getUsersBooking,
  cancelBooking,
  confirmDeposit,
  completeBooking,
  confirmPickup,
} from "../../service/apiService";
import LoadingIcon from "../Loading";
import { useNavigate } from "react-router-dom";
import SelectPaymentMethodModal from "./SelectPaymentMethodModal";

function MyBooking() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("vnpay");
  const [bookingId, setBookingId] = useState("");
  const [type, setType] = useState("Deposit");

  const handleBookingDetail = (bookingId) => {
    navigate(`/booking-detail/${bookingId}`);
  };
  const handleComplete = async (bookingId, paymentMethod) => {
    try {
      let response = await completeBooking(bookingId, paymentMethod);
      console.log(response);
      alert(`Booking ${bookingId} has been complete!`);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === bookingId ? { ...item, bookingStatus: "Payment Paid" } : item
        )
      );
      return response;
    } catch (error) {
      console.error("Error conplete booking:", error);
      alert("Failed to complete booking. Please try again.");
    }
  };
  const handleConfirm = async (bookingId, paymentMethod) => {
    try {
      await confirmDeposit(bookingId, paymentMethod);
      alert(`Booking ${bookingId} has been confirmed!`);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === bookingId
            ? { ...item, bookingStatus: "In Progress" }
            : item
        )
      );
    } catch (error) {
      console.error("Error confirming booking:", error);
      alert("Failed to confirm booking. Please try again.");
    }
  };
  const handleConfirmPickup = async (bookingId) => {
    try {
      await confirmPickup(bookingId);
      alert(`Booking ${bookingId} has been confirmed pickup!`);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === bookingId
            ? { ...item, bookingStatus: "In Progress" }
            : item
        )
      );
    } catch (error) {
      console.error("Error confirming booking:", error);
      alert("Failed to confirm booking. Please try again.");
    }
  };
  const handlePayment = async (bookingId, paymentMethod) => {
    // try {
    //   await confirmPickup(bookingId);
    //   alert(`Booking ${bookingId} has been confirmed pickup!`);
    //   setData((prevData) =>
    //     prevData.map((item) =>
    //       item.id === bookingId
    //         ? { ...item, bookingStatus: "Awaiting Pickup Confirmation" }
    //         : item
    //     )
    //   );
    // } catch (error) {
    //   console.error("Error confirming booking:", error);
    //   alert("Failed to confirm booking. Please try again.");
    // }
  };

  // const fetchImages = async (imageApis) => {
  //   try {
  //     const imagePromises = imageApis.map((api) =>
  //       fetch(`http://localhost:8386${api}`).then((res) => {
  //         if (res.ok) {
  //           return res.blob();
  //         }

  //         throw new Error("Failed to fetch image");
  //       })
  //     );
  //     const blobs = await Promise.all(imagePromises);
  //     const urls = blobs.map((blob) => URL.createObjectURL(blob));
  //     setImageURLs(urls);

  //     return () => {
  //       urls.forEach((url) => URL.revokeObjectURL(url));
  //     };
  //   } catch (error) {
  //     console.error("Error fetching images:", error);
  //   }
  // };
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
          item.id === bookingId ? { ...item, bookingStatus: "Canceled" } : item
        )
      );
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Failed to cancel booking. Please try again.");
    }
  };

  const handleSelectPayment = (event, bookingId) => {
    setType(event.target.name);
    setBookingId(bookingId);
    setShowModalPayment(true);
  }

  // Pending Deposit - sau khi tạo booking - Cancel ok
  // Deposit Paid - sau khi renter trả tiền - Cancel v
  // Confirmed - owner confirm là đã trả deposit v
  // In Progress - sau khi renter confirm - pickup v
  // Pending Payment - sau khi return car v
  // Payment Paid - sau khi renter trả tiền v
  // Completed - sau khi owner xác nhận đã nhận đc tiền
  // Canceled:

  // View Detail
  // Cancel
  // return car
  //confirm pick up
  // pending payment

  const renderActionButtons = (status, bookingId, paymentMethod) => {
    switch (status) {
      case "Pending Deposit":
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
              name="Deposit"
              onClick={(event) => handleSelectPayment(event, bookingId)}
            >
              Payment Deposit
            </Button>

            <Button
              onClick={() => handleCancel(bookingId)}
              className="btn-danger"
            >
              Cancel
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
            {/* <Button
              className="btn-pickup"
              onClick={() => handleConfirm(bookingId, paymentMethod)}
            >
              Confirm deposit
            </Button> */}
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
            <Button
              className="btn-detail"
              onClick={() => handleSelectPayment(bookingId)}
            >
              Payment now!
            </Button>
          </>
        );
      case "Payment Paid":
        return (
          <Button
            className="btn-detail"
            onClick={() => handleBookingDetail(bookingId)}
          >
            View details
          </Button>
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
            <Button
              className="btn-detail"
              onClick={() => handleConfirmPickup(bookingId)}
            >
              Confirm Pickup
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
            <Button
              className="btn-return"
              name="Rental"
              onClick={(event) => handleSelectPayment(event, bookingId)}
            >
              Return car
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
      <SelectPaymentMethodModal
        show={showModalPayment}
        setShow={setShowModalPayment}
        bookingId={bookingId}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        type={type}
        handleComplete={handleComplete}
      />
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
                    "wallet"
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

export default MyBooking;
