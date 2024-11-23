import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import HeroSection from "../Content/HeroSection";
import SearchContainer from "../Content/SearchContainer";
import ModalPickLocation from "../Content/ModalPickLocation";
import ModalPickDate from "../Content/ModalPickDate";
import WhyUs from "../Content/WhyUs";
import LocationSection from "../Content/LocationSection";
import TestimonialsSection from "../Content/TestimonialsSection";
const Renter = () => {

    const [showModalPickLocation, setShowModalPickLocation] = useState(false);
    const [showModalPickDate, setShowModalPickDate] = useState(false);
    const [locationSelected, setLocationSelected] = useState("");
    const [dateSelected, setDateSelected] = useState("");

    const handleClickBtnLocation = () => {
        setShowModalPickLocation(true);
    }

    const handleClickBtnDate = () => {
        setShowModalPickDate(true);
    }

    return (
        <div className="homepage-container">
            <HeroSection />
            <SearchContainer
                handleClickBtnLocation={handleClickBtnLocation}
                locationSelected={locationSelected}
                handleClickBtnDate={handleClickBtnDate}
                dateSelected={dateSelected}
            />
            <ModalPickLocation
                show={showModalPickLocation}
                setShow={setShowModalPickLocation}
                locationSelected={locationSelected}
                setLocationSelected={setLocationSelected}
            />
            <ModalPickDate
                show={showModalPickDate}
                setShow={setShowModalPickDate}
                dateSelected={dateSelected}
                setDateSelected={setDateSelected}
            />
            <WhyUs />
            <TestimonialsSection />
            <LocationSection />
        </div>
    )
};

export default Renter;
