import React, { useState } from 'react'
import background from '../../assets/homepage_d.jpg'
import { Container } from 'react-bootstrap'
import HeroSection from './Content/HeroSection'
import SearchContainer from './Content/SearchContainer'
import ModalPickLocation from './Content/ModalPickLocation'
import '../Home/HomePage.scss'

const HomePage = () => {

    const [showModalPickLocation, setShowModalPickLocation] = useState(false);
    const [locationSelected, setLocationSelected] = useState("");

    const handleClickBtnLocation = () => {
        setShowModalPickLocation(true);
    }

    return (
        <Container className="homepage-container">
            <HeroSection />
            <SearchContainer
                handleClickBtnLocation={handleClickBtnLocation}
                locationSelected={locationSelected}
            />
            <ModalPickLocation
                show={showModalPickLocation}
                setShow={setShowModalPickLocation}
                locationSelected={locationSelected}
                setLocationSelected={setLocationSelected}
            />
        </Container>
    )
}

export default HomePage