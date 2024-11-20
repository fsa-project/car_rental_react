import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  Card,
  Row,
  Col,
  Carousel,
  Dropdown,
} from "react-bootstrap";
function MyBooking() {
  const cars = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "Nissan Navara El 2017",
    images: [
      "https://vinfast-hcm.vn/wp-content/uploads/2023/06/vinfast-vf3.png",
      "https://giaxevinfast.net/wp-content/uploads/2024/04/VinFast-VF3-11.png",
    ],
    rating: 0,
    rides: 0,
    price: "900K/day",
    location: "Cau Giay, Hanoi",
    status: i % 2 === 0 ? "Available" : "Unavailable",
  }));
  const styles = {
    image: {
      width: "150px",
      height: "100px",
      objectFit: "cover",
    },
    carouselImage: {
      height: "200px",
      objectFit: "cover",
    },
    available: {
      color: "green",
      fontWeight: "bold",
    },
    unavailable: {
      color: "red",
      fontWeight: "bold",
    },
    primaryButton: {
      backgroundColor: "#ffc107",
      color: "black",
      border: "none",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
    },
    secondaryButton: {
      backgroundColor: "white",
      color: "#333",
      border: "1pt solid #333",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
    },
    activeButton: {
      backgroundColor: "#ffc107",
      color: "#333",
      border: "none",
    },
    inactiveButton: {
      backgroundColor: "white",
      color: "#333",
      border: "1pt solid #333",
    },
  };
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Container>
          <h3 className="text-center mb-4">My Booking</h3>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <p className="mb-0">You have 4 on-going bookings</p>
            </div>
            <div className="col-sm-6 text-end">
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
          </div>
          <br></br>
          <Row>
            {cars.map((car) => (
              <Col md={12} key={car.id} className="mb-4">
                <Card className="p-4">
                  <Row className="align-items-center">
                    {/* Carousel */}
                    <Col md={6} className="d-flex justify-content-center">
                      <Carousel>
                        {car.images.map((img, index) => (
                          <Carousel.Item key={index}>
                            <img
                              src={img}
                              alt={`Car ${index + 1}`}
                              style={styles.carouselImage}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Col>

                    {/* Nội dung */}
                    <Col
                      md={4}
                      className="d-flex flex-column justify-content-center"
                    >
                      <h5 className="text-center">{car.name}</h5>
                      <p className="text-center">
                        <strong>Ratings:</strong>{" "}
                        {"★".repeat(car.rating) + "☆".repeat(5 - car.rating)}{" "}
                        <span style={{ color: "#aaa" }}>
                          {car.rating === 0 ? "(No ratings yet)" : ""}
                        </span>
                      </p>
                      <p className="text-center">
                        <strong>From</strong> {car.rides}
                      </p>
                      <p className="text-center">
                        <strong>To</strong> {car.price}
                      </p>
                      <p className="text-center">
                        <strong>Number of days: </strong> {car.location}
                      </p>
                      <p className="text-center">
                        <strong>base price: </strong> {car.location}
                      </p>
                      <p className="text-center">
                        <strong>Total: </strong> {car.location}
                      </p>
                      <p className="text-center">
                        <strong>Deposit: </strong> {car.location}
                      </p>
                      <p className="text-center">
                        <strong>Booking No: </strong> {car.location}
                      </p>
                      <p className="text-center">
                        <strong>Status:</strong>{" "}
                        <span
                          style={
                            car.status === "Available"
                              ? styles.available
                              : styles.unavailable
                          }
                        >
                          {car.status}
                        </span>
                      </p>
                    </Col>
                    <Col md={1}>
                      <div className="d-flex justify-content-center gap-2 mt-3">
                        <Button
                          style={styles.primaryButton}
                          disabled={car.status !== "Available"}
                        >
                          Rent now
                        </Button>
                      </div>
                    </Col>
                    <Col md={1}>
                      <div className="d-flex justify-content-center gap-2 mt-3">
                        <Button style={styles.secondaryButton}>
                          View details
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default MyBooking;
