import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const ListCar = () => {
  const cars = [
    {
      id: 1,
      name: "Nissan Navara El 2017",
      images: [
        "https://via.placeholder.com/300x200?text=Image+1",
        "https://via.placeholder.com/300x200?text=Image+2",
        "https://via.placeholder.com/300x200?text=Image+3",
      ],
      rating: 0,
      rides: 0,
      price: "900k/day",
      location: "Cau Giay, Hanoi",
      status: "Available",
    },
  ];

  // Các style viết trong object
  const styles = {
    carouselImage: {
      height: "300px", // Chiều cao cố định
      objectFit: "cover", // Đảm bảo ảnh vừa khung mà không méo
    },
    primaryButton: {
      backgroundColor: "#ffc107",
      color: "black",
      border: "1px solid",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      transition: "all 0.3s ease-in-out",
    },
    primaryButtonHover: {
      backgroundColor: "black",
      color: "#ffc107",
    },
    secondaryButton: {
      backgroundColor: "black",
      color: "#ffc107",
      border: "1px solid ",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      transition: "all 0.3s ease-in-out",
    },
    secondaryButtonHover: {
      backgroundColor: "#ffc107",
      color: "black",
    },
    available: {
      color: "green",
      fontWeight: "bold",
    },
    unavailable: {
      color: "red",
      fontWeight: "bold",
    },
  };

  return (
    <Container className="py-5">
      <h3 className="text-center mb-4">Car Listing</h3>
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
                          style={styles.carouselImage} // Áp dụng style cho hình ảnh
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
                    <span style={{ color: "#aaa" }}>
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
                      style={
                        car.status === "Available"
                          ? styles.available
                          : styles.unavailable
                      }
                    >
                      {car.status}
                    </span>
                  </p>
                  {/* Nút */}
                  <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                    <Button
                      style={styles.primaryButton}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor =
                          styles.primaryButtonHover.backgroundColor)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor =
                          styles.primaryButton.backgroundColor)
                      }
                      disabled={car.status !== "Available"}
                    >
                      Rent now
                    </Button>
                    <Button
                      style={styles.secondaryButton}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor =
                          styles.secondaryButtonHover.backgroundColor)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor =
                          styles.secondaryButton.backgroundColor)
                      }
                    >
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
  );
};

export default ListCar;
