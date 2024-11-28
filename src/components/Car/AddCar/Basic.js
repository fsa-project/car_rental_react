import React, { useState } from "react";
import "./Basic.scss";

function Basic() {
  const [formData, setFormData] = useState({
    name: "",
    licensePlate: "",
    color: "Black",
    brand: "",
    model: "",
    productionYears: "2022",
    seats: "4",
    transmission: "Automatic",
    fuel: "Gasoline",
    registrationPaper: null,
    certificateOfInspection: null,
    insurance: null,
  });

  const handleFileChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data: ", formData);
  };

  return (
    <form className="basic-form" onSubmit={handleSubmit}>
      <h2>Basic Information</h2>
      <p>
        Note: Please check your information carefully, you'll not be able to
        change the basic details of your car, which is based on the registration
        information.
      </p>
      <div className="form-grid">
        <div>
          <div className="form-group">
            <label>License plate *</label>
            <input
              type="text"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Color *</label>
            <select
              name="color"
              value={formData.color}
              onChange={handleInputChange}
            >
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
            </select>
          </div>
          <div className="form-group">
            <label>Brand name *</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Model *</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Production year *</label>
            <select
              name="productionYear"
              value={formData.productionYears}
              onChange={handleInputChange}
            >
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className="form-group">
            <label>No. of seats *</label>
            <select
              name="seats"
              value={formData.seats}
              onChange={handleInputChange}
            >
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="7">7</option>
            </select>
          </div>
        </div>

        {/* Phần Documents và Radio Buttons */}
        <div>
          <div className="radio-group-wrapper">
            <div className="radio-group">
              <label>Transmission *</label>
              <label>
                <input
                  type="radio"
                  name="transmission"
                  value="Automatic"
                  checked={formData.transmission === "Automatic"}
                  onChange={handleInputChange}
                />
                Automatic
              </label>
              <label>
                <input
                  type="radio"
                  name="transmission"
                  value="Manual"
                  checked={formData.transmission === "Manual"}
                  onChange={handleInputChange}
                />
                Manual
              </label>
            </div>

            <div className="radio-group">
              <label>Fuel *</label>
              <label>
                <input
                  type="radio"
                  name="fuel"
                  value="Gasoline"
                  checked={formData.fuel === "Gasoline"}
                  onChange={handleInputChange}
                />
                Gasoline
              </label>
              <label>
                <input
                  type="radio"
                  name="fuel"
                  value="Diesel"
                  checked={formData.fuel === "Diesel"}
                  onChange={handleInputChange}
                />
                Diesel
              </label>
            </div>
          </div>

          <div className="documents">
            <div className="upload-group">
              <label>Registration paper *</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => handleFileChange(e, "registrationPaper")}
                required
              />
            </div>
            <div className="upload-group">
              <label>Certificate of Inspection *</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => handleFileChange(e, "certificateOfInspection")}
                required
              />
            </div>
            <div className="upload-group">
              <label>Insurance *</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => handleFileChange(e, "insurance")}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Basic;
