import React, { useEffect, useState } from "react";
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
import { FiList } from "react-icons/fi";
import { MdGridOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getUserCars } from "../../../service/apiService"; // API service
import "./OwnerListCar.scss";

const OwnerListCar = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]); // Lưu danh sách xe từ API
  const [viewMode, setViewMode] = useState("table"); // "carousel" hoặc "table"

  useEffect(() => {
    fetchCar(); // Gọi API khi component được mount
  }, []);

  const fetchCar = async () => {
    try {
      const response = await getUserCars(); // Gọi API
      console.log(">>> Full Response:", JSON.stringify(response, null, 2));

      if (response && response.statusCode === 200) {
        setCars(response.data.result); // Gán nếu là mảng
      } else {
        console.error("Response data is not an array.");
        setCars([]); // Đặt giá trị mặc định là mảng rỗng nếu dữ liệu không hợp lệ
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
      setCars([]); // Đặt giá trị mặc định là mảng rỗng nếu lỗi xảy ra
    }
  };

  // Các style tùy chỉnh
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
    stopped: {
      color: "red",
      fontWeight: "bold",
    },
    booked: {
      color: "blue",
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
  };

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
          <Button
            style={{
              backgroundColor: viewMode === "table" ? "#ffc107" : "white",
              color: viewMode === "table" ? "black" : "#333",
              borderColor: "#333",
            }}
            onClick={() => setViewMode("table")}
          >
            <FiList /> Table View
          </Button>
          <Button
            style={{
              backgroundColor: viewMode === "carousel" ? "#ffc107" : "white",
              color: viewMode === "carousel" ? "black" : "#333",
              borderColor: "#333",
            }}
            onClick={() => setViewMode("carousel")}
          >
            <MdGridOn /> Carousel View
          </Button>
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

      {/* Hiển thị dựa vào chế độ view */}
      {viewMode === "table" ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Car Name</th>
              <th>Image</th>

              <th>Price</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cars) &&
              cars.map((car, index) => (
                <tr key={car.id}>
                  <td>{index + 1}</td>
                  <td>{car.name}</td>
                  <td>
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      style={styles.image}
                    />
                  </td>

                  <td>{car.basePrice}</td>
                  <td>{car.address}</td>
                  <td>
                    <span
                      style={
                        car.carStatus === "Available"
                          ? styles.available
                          : car.carStatus === "Booked"
                          ? styles.booked
                          : styles.stopped
                      }
                    >
                      {car.carStatus}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      {car.carStatus === "Booked" && (
                        <>
                          <Button style={styles.primaryButton}>
                            Confirm Payment
                          </Button>
                          <Button style={styles.secondaryButton}>
                            View details
                          </Button>
                        </>
                      )}
                      {car.carStatus === "Available" && (
                        <>
                          <Button style={styles.primaryButton} disabled>
                            Confirm Deposit
                          </Button>
                          <Button style={styles.secondaryButton}>
                            View details
                          </Button>
                        </>
                      )}
                      {car.carStatus === "Stopped" && (
                        <>
                          <Button style={styles.primaryButton}>
                            Confirm Deposit
                          </Button>
                          <Button style={styles.secondaryButton}>
                            View details
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <Row>
          {Array.isArray(cars) &&
            cars.map((car) => (
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
                              style={styles.carouselImage}
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
                        <strong>No. of rides:</strong> {car.rides}
                      </p>
                      <p className="text-center">
                        <strong>Price:</strong> {car.basePrice}
                      </p>
                      <p className="text-center">
                        <strong>Location:</strong> {car.address}
                      </p>
                      <p className="text-center">
                        <strong>Status:</strong>{" "}
                        <span
                          style={
                            car.carStatus === "Available"
                              ? styles.available
                              : car.carStatus === "Booked"
                              ? styles.booked
                              : styles.stopped
                          }
                        >
                          {car.carStatus}
                        </span>
                      </p>
                      <div className="d-flex justify-content-center gap-2 mt-3">
                        {car.carStatus === "Booked" && (
                          <>
                            <Button style={styles.primaryButton}>
                              Confirm Payment
                            </Button>
                            <Button style={styles.secondaryButton}>
                              View details
                            </Button>
                          </>
                        )}
                        {car.carStatus === "Available" && (
                          <>
                            <Button style={styles.primaryButton} disabled>
                              Confirm Deposit
                            </Button>
                            <Button style={styles.secondaryButton}>
                              View details
                            </Button>
                          </>
                        )}
                        {car.carStatus === "Stopped" && (
                          <>
                            <Button style={styles.primaryButton}>
                              Confirm Deposit
                            </Button>
                            <Button style={styles.secondaryButton}>
                              View details
                            </Button>
                          </>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default OwnerListCar;
