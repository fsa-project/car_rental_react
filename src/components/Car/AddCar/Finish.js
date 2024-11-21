import React, { useState } from "react";
import "./Finish.scss";

function Finish() {
  const dummyData = [
    {
      id: 1,
      name: "T72",
      ratings: 4,
      noOfRides: 10,
      price: "900k/day",
      location: "Cau Giay, Hanoi",
      status: "Available",
      images: [
        "https://sohanews.sohacdn.com/160588918557773824/2021/4/1/photo-2-1617237786080908009966.jpg",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Quản lý carousel
  const currentCar = dummyData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
  };

  return (
    <div className="finish-container">
      <h3>Preview</h3>
      <div className="preview-section">
        <div className="image-carousel">
          <div className="image-placeholder">
            <img src={currentCar.images[0]} alt={currentCar.name} />
          </div>
        </div>
        <div className="car-details">
          <h4>{currentCar.name}</h4>
          <div className="details-row">
            <span>Ratings:</span>
            <div className="stars span">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < currentCar.ratings ? "star filled" : "star"
                    }
                  >
                    ⭐
                  </span>
                ))}
            </div>
            <span>({currentCar.ratings} ratings)</span>
          </div>
          <div className="details-row">
            <span>No. of rides: </span>
            <span className="span">{currentCar.noOfRides}</span>
          </div>
          <div className="details-row">
            <span>Price:</span>
            <span className="span">{currentCar.price}</span>
          </div>
          <div className="details-row">
            <span>Locations:</span>
            <span className="span">{currentCar.location}</span>
          </div>
          <div className="details-row">
            <span>Status:</span>
            <span
              className={`span ${
                currentCar.status === "Available"
                  ? "status-available"
                  : "status-unavailable"
              }`}
            >
              {currentCar.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finish;
