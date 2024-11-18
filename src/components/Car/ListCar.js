import React from "react";
import { Container, Table, Button } from "react-bootstrap";

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

  // Các style
  const styles = {
    image: {
      width: "150px",
      height: "100px",
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
      border: "1px solid",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      transition: "all 0.3s ease-in-out",
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
  };

  return (
    <Container className="py-5">
      <h3 className="text-center mb-4">Car Listing</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Car Name</th>
            <th>Image</th>
            <th>Ratings</th>
            <th>No. of Rides</th>
            <th>Price</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={car.id}>
              <td>{index + 1}</td>
              <td>{car.name}</td>
              <td>
                <img src={car.images[0]} alt={car.name} style={styles.image} />
              </td>
              <td>
                {"★".repeat(car.rating) + "☆".repeat(5 - car.rating)}{" "}
                {car.rating === 0 && (
                  <span style={{ color: "#aaa" }}>No ratings yet</span>
                )}
              </td>
              <td>{car.rides}</td>
              <td>{car.price}</td>
              <td>{car.location}</td>
              <td>
                <span
                  style={
                    car.status === "Available"
                      ? styles.available
                      : styles.unavailable
                  }
                >
                  {car.status}
                </span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <Button
                    style={styles.primaryButton}
                    disabled={car.status !== "Available"}
                  >
                    Rent now
                  </Button>
                  <Button style={styles.secondaryButton}>View details</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListCar;
