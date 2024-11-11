import React, { useState } from 'react'
import background from '../../assets/homepage_d.jpg'
import { Container } from 'react-bootstrap'
import HeroSection from './Content/HeroSection'
import SearchContainer from './Content/SearchContainer'
import ModalPickLocation from './Content/ModalPickLocation'
import '../Home/HomePage.scss'
import ModalPickDate from './Content/ModalPickDate'

const HomePage = () => {

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
        <Container className="homepage-container">
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
        </Container>
    )
}

export default HomePage