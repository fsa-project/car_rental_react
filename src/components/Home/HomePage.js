import React, { useState } from 'react'
import background from '../../assets/homepage_d.jpg'
import { Container } from 'react-bootstrap'
import HeroSection from './Content/HeroSection'
import SearchContainer from './Content/SearchContainer'
import ModalPickLocation from './Content/ModalPickLocation'

const HomePage = () => {

    const [showModalPickLocation, setShowModalPickLocation] = useState(false);

    const handleClickBtnLocation = () => {
        setShowModalPickLocation(true);
    }

    return (
        <Container className="homepage-container">
            <HeroSection />
            <SearchContainer
                handleClickBtnLocation={handleClickBtnLocation}
            />
            <ModalPickLocation
                show={showModalPickLocation}
                setShow={setShowModalPickLocation}
            />
        </Container>
    )
}

export default HomePage