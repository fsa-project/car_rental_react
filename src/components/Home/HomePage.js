import React from 'react'
import background from '../../assets/homepage_d.jpg'
import { Container } from 'react-bootstrap'
import HeroSection from './Content/HeroSection'
import SearchContainer from './Content/SearchContainer'

const HomePage = () => {
    return (
        <Container className="homepage-container">
            <HeroSection />
            <SearchContainer />
        </Container>
    )
}

export default HomePage