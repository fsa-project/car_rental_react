import React from "react";
import { Carousel, Tab, Tabs, Table, Button, Container } from "react-bootstrap";

function CarDetails() {
  return (
    <Container>
      <div
        className="car-details-container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}
      >
        <div className="d-flex justify-content-between">
          {/* Carousel */}
          <div style={{ width: "60%", paddingRight: "20px" }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://vinfastotominhdao.vn/wp-content/uploads/vf3-3034-5-1110x624.jpg"
                  alt="Car Image 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://vinfastvungtau.com.vn/hoanghung/UploadFile/images/vf/vinfast-vf3-3474-4.jpg"
                  alt="Car Image 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://vinfasthadong.com.vn/wp-content/uploads/2023/10/VinFast-VF3-mau-cam-noc-trang-scaled-1.jpg"
                  alt="Car Image 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Car Overview */}
          <div style={{ width: "40%" }}>
            <h2>Vinfast VF3</h2>
            <p>
              Ratings: <span>☆☆☆☆☆</span> (No ratings yet)
            </p>
            <p>
              No. of rides: <strong>0</strong>
            </p>
            <p>
              Price: <strong>1k/day</strong>
            </p>
            <p>
              Locations: <strong>Đất thổ cư Hòa Lạc</strong>
            </p>
            <p>
              Status: <span style={{ color: "green" }}>Available</span>
            </p>
            <Button
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
              Rent Now
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultActiveKey="basic" id="car-details-tabs" className="mt-4">
          <Tab eventKey="basic" title="Basic Information">
            <Table striped bordered hover className="mt-3">
              <tbody>
                <tr>
                  <td>License plate:</td>
                  <td>ABC-123</td>
                  <td>Color:</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <td>Brand name:</td>
                  <td>Nissan</td>
                  <td>Model:</td>
                  <td>Navara</td>
                </tr>
                <tr>
                  <td>Production year:</td>
                  <td>2017</td>
                  <td>No. of seats:</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Transmission:</td>
                  <td>Automatic</td>
                  <td>Fuel:</td>
                  <td>Diesel</td>
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
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Registration paper</td>
                  <td>Verified</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Certificate of Inspection</td>
                  <td>Verified</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Insurance</td>
                  <td>Not available</td>
                </tr>
              </tbody>
            </Table>
            <p className="text-muted">
              Note: Documents will be available for viewing after you’ve paid
              the deposit to rent.
            </p>
          </Tab>
          <Tab eventKey="details" title="Details">
            <div className="mt-3">
              <p>
                <strong>Mileage:</strong> 100,000 km
              </p>
              <p>
                <strong>Fuel consumption:</strong> 18 liter/100 km
              </p>
              <p>
                <strong>Address:</strong>
              </p>
              <p className="text-muted">
                Note: Full address will be available after you’ve paid the
                deposit to rent.
              </p>
              <p>
                <strong>Description:</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                <strong>Additional functions:</strong>
              </p>
              <div className="d-flex flex-wrap">
                <div style={{ width: "25%" }}>
                  <input type="checkbox" checked disabled /> Bluetooth
                </div>
                <div style={{ width: "25%" }}>
                  <input type="checkbox" checked disabled /> GPS
                </div>
                <div style={{ width: "25%" }}>
                  <input type="checkbox" checked disabled /> Camera
                </div>
                <div style={{ width: "25%" }}>
                  <input type="checkbox" disabled /> Sun roof
                </div>
                <div style={{ width: "25%" }}>
                  <input type="checkbox" checked disabled /> Child lock
                </div>
                <div style={{ width: "25%" }}>
                  <input type="checkbox" checked disabled /> Child seat
                </div>
                <div style={{ width: "25%" }}>
                  <input type="checkbox" disabled /> DVD
                </div>
                <div style={{ width: "25%" }}>
                  <input type="checkbox" disabled /> USB
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="terms" title="Terms of use">
            <div className="mt-3">
              <p>
                <strong>Base price:</strong> 9999 VND/Day
              </p>
              <p>
                <strong>Required Deposit:</strong> 150000 VND
              </p>

              <div className="d-flex flex-wrap">
                <p style={{ width: "100%" }}>
                  <strong>Term of use</strong>
                </p>
                <div style={{ width: "100%" }}>
                  <input type="checkbox" checked disabled /> No smoking
                </div>
                <div style={{ width: "100%" }}>
                  <input type="checkbox" checked disabled /> No food in car
                </div>
                <div style={{ width: "100%" }}>
                  <input type="checkbox" checked disabled /> No pet
                </div>
                <div style={{ width: "100%" }}>
                  <input type="checkbox" disabled /> Other
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default CarDetails;
