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
import "./OwnerListCar.scss";
import { useNavigate } from "react-router-dom";

const ListCar = () => {
  const navigate = useNavigate();
  const cars = Array.from({ length: 5 }, (_, i) => ({
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
    status: i % 2 === 0 ? "Available" : "Stopped",
  }));

  return (
    <Container className="owner-list-car py-1">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button
          className="secondary-button"
          onClick={() => navigate("/add-car")}
        >
          Add car
        </Button>
        <div className="d-flex gap-2">
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">
              Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Latest to Newest</Dropdown.Item>
              <Dropdown.Item>Price: Highest to Lowest</Dropdown.Item>
              <Dropdown.Item>Price: Lowest to Highest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Row>
        {cars.map((car) => (
          <Col md={12} key={car.id} className="mb-4">
            <Card className="p-3">
              <Row className="align-items-center">
                {/* Carousel */}
                <Col md={6} className="d-flex justify-content-center">
                  <Carousel>
                    {car.images.map((img, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={img}
                          alt={`Car ${index + 1}`}
                          className="carousel-image"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>

                {/* Nội dung */}
                <Col
                  md={6}
                  className="d-flex flex-column justify-content-center"
                >
                  <h5 className="text-center">{car.name}</h5>
                  <p className="text-center">
                    <strong>Ratings:</strong>{" "}
                    {"★".repeat(car.rating) + "☆".repeat(5 - car.rating)}{" "}
                    <span className="no-rating">
                      {car.rating === 0 ? "(No ratings yet)" : ""}
                    </span>
                  </p>
                  <p className="text-center">
                    <strong>No. of rides:</strong> {car.rides}
                  </p>
                  <p className="text-center">
                    <strong>Price:</strong> {car.price}
                  </p>
                  <p className="text-center">
                    <strong>Location:</strong> {car.location}
                  </p>
                  <p className="text-center">
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        car.status === "Available"
                          ? "status-available"
                          : "status-stopped"
                      }
                    >
                      {car.status}
                    </span>
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <Button
                      className="primary-button"
                      disabled={car.status !== "Available"}
                    >
                      Confirm Deposit
                    </Button>
                    <Button className="secondary-button">View details</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListCar;
