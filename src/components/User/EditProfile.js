import React, { useState } from "react";
import { Tabs, Tab, Table, Container } from "react-bootstrap";

const EditProfile = () => {
  const [key, setKey] = useState("basic");

  return (
    <Container>
      <br></br>
      <h2>Edit Profile</h2>
      <div className="container mt-4">
        <Tabs
          id="edit-profile-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {/* Tab Basic Information */}
          <Tab eventKey="basic" title="Basic Information">
            <Table striped bordered hover className="mt-3">
              <tbody>
                <tr>
                  <td>Full Name:</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>Date of Birth:</td>
                  <td>01/01/1990</td>
                </tr>
                <tr>
                  <td>Phone Number:</td>
                  <td>123-456-789</td>
                </tr>
                <tr>
                  <td>Email Address:</td>
                  <td>johndoe@example.com</td>
                </tr>
              </tbody>
            </Table>
          </Tab>

          {/* Tab Details */}
          <Tab eventKey="details" title="Details">
            <div className="mt-3">
              <p>
                <strong>National ID No.:</strong> 123456789
              </p>
              <p>
                <strong>Driving License:</strong> ABC123456
              </p>
              <p>
                <strong>Address:</strong> 123 Street, City, Country
              </p>
            </div>
          </Tab>

          {/* Tab Security */}
          <Tab eventKey="security" title="Security">
            <div className="mt-3">
              <p>
                <strong>Change Password:</strong>
              </p>
              <form>
                <div className="mb-3" style={{ width: "50%" }}>
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="mb-3" style={{ width: "50%" }}>
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default EditProfile;
