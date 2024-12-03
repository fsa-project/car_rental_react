import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { RxCalendar } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import searchRequest from "../../../service/apiService"; // Import apiService

const SearchForm = (props) => {
  const {
    activeTab,
    handleClickBtnLocation,
    locationSelected,
    handleClickBtnDate,
    dateSelected,
  } = props;

  const [carList, setCarList] = useState([]); // Lưu danh sách xe trả về từ API

  const handleSearch = async () => {
    if (!dateSelected || !locationSelected) {
      alert("Please select both location and date!");
      return;
    }

    const searchParams = {
      startDate: dateSelected.start,
      endDate: dateSelected.end,
      address: locationSelected,
      page: 1,
      size: 2,
    };

    try {
      const cars = await searchRequest.searchCars(searchParams);
      setCarList(cars);
      console.log("Cars found: ", cars);
    } catch (error) {
      alert("Failed to fetch cars. Please try again.");
    }
  };

  return (
    <div className="search-form">
      {activeTab === "selfDrive" && (
        <div className="search-form-container sd">
          <div className="search-form-item address">
            <div className="title">
              <div className="wrap-svg">
                <SlLocationPin
                  className="location-icon"
                  width="24px"
                  height="24px"
                />
              </div>
              <p>Pick-up Location</p>
            </div>
            <div className="choose">
              <div
                className="choose-item has-arrow"
                onClick={() => handleClickBtnLocation()}
              >
                <div className="here-autocomplete">
                  <p className="address pointer">
                    {locationSelected ? locationSelected : "Choose a location"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="vr"></div>
          <div className="search-form-item">
            <div className="title">
              <div className="wrap-svg">
                <RxCalendar
                  className="location-icon"
                  width="24px"
                  height="24px"
                />
              </div>
              <p>Pick-up Date</p>
            </div>
            <div className="choose">
              <div
                className="choose-item has-arrow"
                onClick={() => handleClickBtnDate()}
              >
                <div className="here-autocomplete">
                  <p className="address pointer">
                    {dateSelected
                      ? `${dateSelected.start} to ${dateSelected.end}`
                      : "Choose date to pick-up and drop-off"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="warning btn-search"
            onClick={handleSearch} // Thêm sự kiện gọi hàm search
          >
            Search
          </Button>
        </div>
      )}

      {/* Hiển thị danh sách xe */}
      <div className="car-list">
        {carList.length > 0 ? (
          carList.map((car, index) => (
            <div key={index} className="car-item">
              <p>{car.name}</p>
              <p>{car.description}</p>
              {/* Hiển thị thêm thông tin xe nếu cần */}
            </div>
          ))
        ) : (
          <p>No cars found</p>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
