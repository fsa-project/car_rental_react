import React from "react";
import { Container, Button, Dropdown, Col, Row } from "react-bootstrap";
import "./MyBooking.scss"; // Import file SCSS

function MyBooking() {
  const cars = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    image:
      "https://cmu-cdn.vinfast.vn/2024/11/fd50e666-vinfastso1-1536x864.jpg",
    name: "Nissan Navara El 2017",
    from: "13/02/2022 - 12:00 PM",
    to: "23/02/2022 - 14:00 PM",
    days: 10,
    basePrice: "900K/day",
    total: "9M",
    deposit: "3M",
    bookingNo: `0123456`,
    status: [
      "Confirmed",
      "Pending deposit",
      "In-progress",
      "Pending payment",
      "Completed",
      "Cancelled",
    ][i],
  }));

  const renderActionButtons = (status) => {
    switch (status) {
      case "Confirmed":
        return (
          <>
            <Button className="btn-detail">View details</Button>
            <Button className="btn-pickup">Confirm pick-up</Button>
            <Button className="btn-danger">Cancel</Button>
          </>
        );
      case "Pending deposit":
        return (
          <>
            <Button className="btn-detail">View details</Button>
            <Button className="btn-danger">Cancel</Button>
          </>
        );
      case "In-progress":
        return (
          <>
            <Button className="btn-detail">View details</Button>
            <Button className="btn-return">Return car</Button>
          </>
        );
      case "Pending payment":
        return (
          <>
            <Button className="btn-detail">View details</Button>
          </>
        );
      case "Completed":
        return (
          <>
            <Button className="btn-detail">View details</Button>
          </>
        );
      case "Cancelled":
        return (
          <>
            <Button className="btn-detail">View details</Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <h1 className="text-center">My Bookings</h1>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0">You have {cars.length} on-going bookings</p>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary">
            Newest to Latest
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Newest</Dropdown.Item>
            <Dropdown.Item>Latest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Table container */}
      <div className="table-container">
        {cars.map((car) => (
          <div key={car.id} className="row-item">
            <div className="action-column">
              <div className="image-column">
                <img src={car.image} alt={car.name} className="car-image" />
              </div>
            </div>
            {/* Details column */}

            <div className="details-column">
              <Row>
                <Col md={6}>
                  <h5 className="car-title">{car.name}</h5>
                  <p className="car-info">
                    <strong>From:</strong> {car.from}
                  </p>
                  <p className="car-info">
                    <strong>To:</strong> {car.to}
                  </p>
                  <p className="car-info">
                    <strong>Number of days:</strong> {car.days}
                  </p>
                </Col>
                <Col md={6}>
                  <p className="car-info">
                    <strong>Base price:</strong> {car.basePrice}
                  </p>
                  <p className="car-info">
                    <strong>Total:</strong> {car.total}
                  </p>
                  <p className="car-info">
                    <strong>Deposit:</strong> {car.deposit}
                  </p>
                  <p className="car-info">
                    <strong>Booking No:</strong> {car.bookingNo}
                  </p>
                  <p className="car-info">
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        car.status === "Confirmed"
                          ? "status-confirmed"
                          : car.status === "In-progress"
                          ? "status-in-progress"
                          : car.status === "Pending deposit"
                          ? "status-pending"
                          : car.status === "Completed"
                          ? "status-completed"
                          : car.status === "Cancelled"
                          ? "status-cancelled"
                          : ""
                      }
                    >
                      {car.status}
                    </span>
                  </p>
                </Col>
              </Row>
            </div>

            {/* Action column */}
            <div className="action-column">
              {renderActionButtons(car.status)}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default MyBooking;
