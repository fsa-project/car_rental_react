import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const bookingInfo = () => {
  const bookingInfo = {
    pickupLocation: "Trung Kính, Cầu Giấy, Hà Nội",
    pickupDateTime: "13/02/2022 - 12:00 PM",
    returnDateTime: "23/02/2022 - 14:00 PM",
  };

  const styles = {
    container: {
      backgroundColor: "#555",
      color: "#fff",
      padding: "1rem",
      borderRadius: "8px",
      position: "relative",
    },
    editButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      color: "#fff",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    editIcon: {
      marginLeft: "5px",
    },
  };

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          <h5>Booking Details</h5>
          <ul>
            <li>
              <strong>Pick-up location:</strong> {bookingInfo.pickupLocation}
            </li>
            <li>
              <strong>Pick-up date and time:</strong>{" "}
              {bookingInfo.pickupDateTime}
            </li>
            <li>
              <strong>Return date and time:</strong>{" "}
              {bookingInfo.returnDateTime}
            </li>
          </ul>
        </Col>
      </Row>
      <Button style={styles.editButton}>
        Change details
        <FaEdit style={styles.editIcon} />
      </Button>
    </Container>
  );
};

export default bookingInfo;
