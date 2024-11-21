import React, { Component } from "react";
import OwnerListCar from "../../components/Car/OwnerListCar/OwnerListCar";
import { Button, Container } from "react-bootstrap";
function OwnerListCarPage() {
  return (
    <Container>
      <h3 style={{ textAlign: "center", paddingTop: "1rem" }}>Your List Car</h3>

      <OwnerListCar />
    </Container>
  );
}

export default OwnerListCarPage;
