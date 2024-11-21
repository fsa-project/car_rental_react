import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./BookingDetail.scss";

const BookingDetail = () => {
  const [isDifferentDriver, setIsDifferentDriver] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsDifferentDriver(e.target.checked);
  };

  return (
    <div className="booking-detail">
      <Row className="car-info mb-4">
        <Col md={4}>
          <div className="car-image">
            <img src="/path-to-car-image.jpg" alt="Car" className="img-fluid" />
          </div>
        </Col>
        <Col md={8}>
          <h4>Nissan Navara El 2017</h4>
          <p>Ratings: ⭐⭐⭐⭐⭐</p>
          <p>No. of rides: 0</p>
          <p>Price: 900k/day</p>
          <p>Location: Cau Giay, Hanoi</p>
          <p>
            Status: <span className="status-available">Available</span>
          </p>
        </Col>
      </Row>

      {/* Form thông tin */}
      <Form>
        <h5>Renter's Information</h5>
        <Row>
          <Col md={6}>
            <Form.Group controlId="renterFullName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="renterDob">
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="renterPhone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="renterEmail">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="renterNationalId">
              <Form.Label>National ID No.:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter national ID"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="renterLicense">
              <Form.Label>Driving License:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter driving license"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="renterAddress">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                placeholder="City/Province, District, Ward, Street"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <h5>Driver's Information</h5>
        <Form.Group controlId="differentDriver">
          <Form.Check
            type="checkbox"
            label="Different than Renter's information"
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group controlId="driverFullName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                disabled={!isDifferentDriver}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="driverDob">
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control type="date" disabled={!isDifferentDriver} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="driverPhone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                disabled={!isDifferentDriver}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="driverEmail">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                disabled={!isDifferentDriver}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="driverNationalId">
              <Form.Label>National ID No.:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter national ID"
                disabled={!isDifferentDriver}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="driverLicense">
              <Form.Label>Driving License:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter driving license"
                disabled={!isDifferentDriver}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="driverAddress">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                placeholder="City/Province, District, Ward, Street"
                disabled={!isDifferentDriver}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BookingDetail;
