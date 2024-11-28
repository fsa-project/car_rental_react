import React, { useEffect, useState } from "react";
import { Carousel, Tab, Tabs, Table, Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getUserCarsDetail } from "../../service/apiService"; // API service

function OwnerCarDetail() {
  const navigate = useNavigate();
  const { carId } = useParams();

  const [carDetail, setCarDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUpdateCar = () => {
    navigate(`/update-car/${carId}`);
  };

  const handleConfirm = () => {
    if (carDetail.carStatus === "Booked") {
      console.log("Confirm deposit");
    } else if (carDetail.carStatus === "Stopped") {
      console.log("Confirm payment");
    }
  };

  useEffect(() => {
    const fetchCarDetail = async () => {
      console.log(carId);
      try {
        const response = await getUserCarsDetail(carId);
        console.log(response.statusCode);
        console.log(response.data);

        if (response && response.statusCode === 200) {
          setCarDetail(response.data);
        } else {
          console.error("Failed to fetch car details.");
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarDetail();
  }, [carId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!carDetail) {
    return <p>No car details found.</p>;
  }

  return (
    <Container>
      <div
        className="car-details-container"
        style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}
      >
        <div className="d-flex justify-content-between">
          {/* Carousel */}
          <div style={{ width: "60%", paddingRight: "20px" }}>
            <Carousel>
              {carDetail.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Car Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div style={{ width: "40%" }}>
            <h2>{carDetail.name}</h2>
            <p>
              Price: <strong>{carDetail.basePrice}/day</strong>
            </p>
            <p>
              Locations: <strong>{carDetail.address}</strong>
            </p>
            <p>
              Status:{" "}
              <span
                style={{
                  color: carDetail.carStatus === "Available" ? "green" : "red",
                }}
              >
                {carDetail.carStatus}
              </span>
            </p>

            {carDetail.carStatus === "Booked" && (
              <Button
                onClick={handleConfirm}
                style={{
                  backgroundColor: "#ffc107",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  color: "#070707",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Confirm Deposit
              </Button>
            )}

            {carDetail.carStatus === "Stopped" && (
              <Button
                onClick={handleConfirm}
                style={{
                  backgroundColor: "#ffc107",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  color: "#070707",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Confirm Payment
              </Button>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultActiveKey="basic" id="car-details-tabs" className="mt-4">
          <Tab eventKey="basic" title="Basic Information">
            <Table striped bordered hover className="mt-3">
              <tbody>
                <tr>
                  <td>License plate:</td>
                  <td>{carDetail.licensePlate}</td>
                  <td>Color:</td>
                  <td>{carDetail.color}</td>
                </tr>
                <tr>
                  <td>Brand name:</td>
                  <td>{carDetail.brand}</td>
                  <td>Model:</td>
                  <td>{carDetail.model}</td>
                </tr>
                <tr>
                  <td>Production year:</td>
                  <td>{carDetail.year}</td>
                  <td>No. of seats:</td>
                  <td>{carDetail.seats}</td>
                </tr>
                <tr>
                  <td>Transmission:</td>
                  <td>{carDetail.transmission}</td>
                  <td>Fuel:</td>
                  <td>{carDetail.fuel}</td>
                </tr>
              </tbody>
            </Table>
            <h4 className="mt-4">Documents:</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>{/* Documents mapping */}</tbody>
            </Table>
            <p className="text-muted">
              Note: Documents will be available for viewing after you’ve paid
              the deposit to rent.
            </p>
          </Tab>
          <Tab eventKey="details" title="Details">
            <div className="mt-3">
              <p>
                <strong>Mileage:</strong> {carDetail.mileage} km
              </p>
              <p>
                <strong>Fuel consumption:</strong> {carDetail.fuelConsumption}{" "}
                liter/100 km
              </p>
              <p>
                <strong>Description:</strong>
              </p>
              <p>{carDetail.description}</p>
            </div>
          </Tab>
          <Tab eventKey="terms" title="Terms of use">
            <div className="mt-3">
              <p>
                <strong>Base price:</strong> {carDetail.basePrice} VND/Day
              </p>
              <p>
                <strong>Required Deposit:</strong> {carDetail.deposit} VND
              </p>
              <p>
                <strong>Term of use:</strong>
              </p>
            </div>
          </Tab>
        </Tabs>

        {/* Nút cập nhật thông tin chi tiết xe */}
        <div className="mt-4 text-center">
          <Button
            onClick={handleUpdateCar}
            style={{
              backgroundColor: "#ffc107",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              color: "#070707",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Update Car Information
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default OwnerCarDetail;
