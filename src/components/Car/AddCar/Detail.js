import React, { useState } from "react";
import "./Detail.scss"; // Import file SCSS cho styling
import { Col, Row } from "react-bootstrap";

function Detail() {
  const [formData, setFormData] = useState({
    mileage: "",
    fuelConsumption: "",
    address: {
      search: "",
      city: "",
      district: "",
      ward: "",
      street: "",
    },
    description: "",
    functions: {
      bluetooth: false,
      gps: false,
      camera: false,
      sunRoof: false,
      childLock: false,
      childSeat: false,
      dvd: false,
      usb: false,
    },
    images: {
      front: null,
      back: null,
      left: null,
      right: null,
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      functions: { ...formData.functions, [name]: checked },
    });
  };

  const handleFileChange = (event, field) => {
    setFormData({
      ...formData,
      images: { ...formData.images, [field]: event.target.files[0] },
    });
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      address: { ...formData.address, [name]: value },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data: ", formData);
  };

  return (
    <form className="detail-form" onSubmit={handleSubmit}>
      <h2>Vehicle Details</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>Mileage *</label>
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fuel consumption</label>
          <Row>
            <Col md={9}>
              <input
                type="number"
                name="fuelConsumption"
                value={formData.fuelConsumption}
                onChange={handleInputChange}
              />
            </Col>
            <Col md={3} style={{ textAlign: "left", paddingTop: "11px" }}>
              <h6>Litters/100km</h6>
            </Col>
          </Row>
        </div>
        <div className="form-group full-width">
          <label>Address *</label>
          <div className="address-inputs">
            <input
              type="text"
              name="search"
              placeholder="Search for an address"
              value={formData.address.search}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City/Province"
              value={formData.address.city}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="district"
              placeholder="District"
              value={formData.address.district}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="ward"
              placeholder="Ward"
              value={formData.address.ward}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="street"
              placeholder="House number, Street"
              value={formData.address.street}
              onChange={handleAddressChange}
            />
          </div>
        </div>
        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <h3>Additional Functions</h3>
      <div className="form-grid">
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="bluetooth"
              checked={formData.functions.bluetooth}
              onChange={handleCheckboxChange}
            />
            Bluetooth
          </label>
          <label>
            <input
              type="checkbox"
              name="gps"
              checked={formData.functions.gps}
              onChange={handleCheckboxChange}
            />
            GPS
          </label>
          <label>
            <input
              type="checkbox"
              name="camera"
              checked={formData.functions.camera}
              onChange={handleCheckboxChange}
            />
            Camera
          </label>
        </div>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="sunRoof"
              checked={formData.functions.sunRoof}
              onChange={handleCheckboxChange}
            />
            Sun Roof
          </label>
          <label>
            <input
              type="checkbox"
              name="childLock"
              checked={formData.functions.childLock}
              onChange={handleCheckboxChange}
            />
            Child Lock
          </label>
          <label>
            <input
              type="checkbox"
              name="childSeat"
              checked={formData.functions.childSeat}
              onChange={handleCheckboxChange}
            />
            Child Seat
          </label>
        </div>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="dvd"
              checked={formData.functions.dvd}
              onChange={handleCheckboxChange}
            />
            DVD
          </label>
          <label>
            <input
              type="checkbox"
              name="usb"
              checked={formData.functions.usb}
              onChange={handleCheckboxChange}
            />
            USB
          </label>
        </div>
      </div>

      <div className="image-section">
        <h3>Images</h3>
        <div className="form-grid images-grid">
          {["front", "back", "left", "right"].map((field) => (
            <div className="upload-group" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                onChange={(e) => handleFileChange(e, field)}
                required
              />
            </div>
          ))}
        </div>
      </div>
      <p className="note">
        Please include full 4 images of your vehicle (Front, Back, Left, Right).
      </p>
    </form>
  );
}

export default Detail;
