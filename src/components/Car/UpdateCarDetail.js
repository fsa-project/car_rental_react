import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { getUserCarsDetail, updateCarDetail } from "../../service/apiService";
import LoadingIcon from "../Loading";

function UpdateCarDetail() {
  const { carId } = useParams();
  const navigate = useNavigate();

  const [carDetail, setCarDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    basePrice: "",
    address: "",
    carStatus: "Available",
    licensePlate: "",
    color: "",
    brand: "",
    model: "",
    productionYears: "",
    numberOfSeats: "",
    transmissionType: "",
    fuelType: "",
    mileage: "",
    fuelConsumption: "",
    description: "",
  });

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await getUserCarsDetail(carId);
        if (response && response.statusCode === 200) {
          setCarDetail(response.data);
          setFormData({
            name: response.data.name || "",
            basePrice: response.data.basePrice || "",
            address: response.data.address || "",
            carStatus: response.data.carStatus || "Available",
            licensePlate: response.data.licensePlate || "",
            color: response.data.color || "",
            brand: response.data.brand || "",
            model: response.data.model || "",
            productionYears: response.data.productionYears || "",
            numberOfSeats: response.data.numberOfSeats || "",
            transmissionType: response.data.transmissionType || "",
            fuelType: response.data.fuelType || "",
            mileage: response.data.mileage || "",
            fuelConsumption: response.data.fuelConsumption || "",
            description: response.data.description || "",
          });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateCarDetail(carId, formData);
      if (response && response.statusCode === 200) {
        alert("Car details updated successfully!");
        navigate(`/owner/car-detail/${carId}`);
      } else {
        alert("Failed to update car details.");
      }
    } catch (error) {
      console.error("Error updating car details:", error);
    }
  };

  if (isLoading) {
    return <LoadingIcon />;
  }

  if (!carDetail) {
    return <p>Car details not found.</p>;
  }

  return (
    <Container>
      <h2 className="mt-4">Update Car Details</h2>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Car Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Base Price (VND/Day)</Form.Label>
              <Form.Control
                type="number"
                name="basePrice"
                value={formData.basePrice}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="carStatus"
                value={formData.carStatus}
                onChange={handleChange}
                required
              >
                <option value="Available">Available</option>
                <option value="Stopped">Stopped</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>License Plate</Form.Label>
              <Form.Control
                type="text"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Production Year</Form.Label>
              <Form.Control
                type="number"
                name="productionYears"
                value={formData.productionYears}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Seats</Form.Label>
              <Form.Control
                type="number"
                name="numberOfSeats"
                value={formData.numberOfSeats}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Transmission Type</Form.Label>
              <Form.Control
                type="text"
                name="transmissionType"
                value={formData.transmissionType}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Fuel Type</Form.Label>
              <Form.Control
                type="text"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mileage</Form.Label>
              <Form.Control
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fuel Consumption</Form.Label>
              <Form.Control
                type="text"
                name="fuelConsumption"
                value={formData.fuelConsumption}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button
          type="submit"
          className="mt-3"
          style={{
            backgroundColor: "#ffc107",
            border: "none",
            color: "#070707",
            fontWeight: "bold",
          }}
        >
          Save Changes
        </Button>
        <Button
          className="mt-3 ms-3"
          variant="secondary"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
      </Form>
      <br></br>
    </Container>
  );
}

export default UpdateCarDetail;
