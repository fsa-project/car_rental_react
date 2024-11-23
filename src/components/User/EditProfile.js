import React, { useState } from "react";
import { Tabs, Tab, Table, Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import './EditProfile.scss'

const EditProfile = () => {
  const [key, setKey] = useState("basic");
  const { isAuthenticated, account } = useSelector((state) => state.user);

  // State quản lý thông tin cơ bản
  const [basicInfo, setBasicInfo] = useState({
    fullName: "John Doe",
    dob: "1990-01-01",
    phone: "123-456-789",
    email: "johndoe@example.com",
  });

  // State quản lý chi tiết thông tin
  const [details, setDetails] = useState({
    nationalId: "123456789",
    drivingLicense: "ABC123456",
    address: "123 Street, City, Country",
  });

  // Hàm cập nhật state cho mục cơ bản
  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm cập nhật state cho mục chi tiết
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm xử lý lưu dữ liệu
  const handleSave = (section) => {
    if (section === "basic") {
      console.log("Saved Basic Information:", basicInfo);
    } else if (section === "details") {
      console.log("Saved Details:", details);
    } else {
      console.log("Security changes saved");
    }
    alert(
      `${section.charAt(0).toUpperCase() + section.slice(1)} information saved!`
    );
  };

  return (
    <div className="big-container">


      <Container>
        <br />
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
                    <td>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={basicInfo.fullName}
                        onChange={handleBasicInfoChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Date of Birth:</td>
                    <td>
                      <Form.Control
                        type="date"
                        name="dob"
                        value={basicInfo.dob}
                        onChange={handleBasicInfoChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phone Number:</td>
                    <td>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={basicInfo.phone}
                        onChange={handleBasicInfoChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email Address:</td>
                    <td>
                      <Form.Control
                        type="email"
                        name="email"
                        value={basicInfo.email}
                        onChange={handleBasicInfoChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button
                className="btn-submit"
                variant="warning"
                onClick={() => handleSave("basic")}
              >
                Save Basic Information
              </Button>
            </Tab>

            {/* Tab Details */}
            <Tab eventKey="details" title="Details">
              <div className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Label>National ID No.:</Form.Label>
                  <Form.Control
                    type="text"
                    name="nationalId"
                    value={details.nationalId}
                    onChange={handleDetailsChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Driving License:</Form.Label>
                  <Form.Control
                    type="text"
                    name="drivingLicense"
                    value={details.drivingLicense}
                    onChange={handleDetailsChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={details.address}
                    onChange={handleDetailsChange}
                  />
                </Form.Group>
              </div>
              <Button
                className="btn-submit"
                variant="warning"
                secondaryonClick={() => handleSave("details")}
              >
                Save Details
              </Button>
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
                  <Button
                    className="btn-submit"
                    variant="warning"
                    onClick={() => handleSave("security")}
                  >
                    Save Security
                  </Button>
                </form>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default EditProfile;
