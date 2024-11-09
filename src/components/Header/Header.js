import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo51.png'
import { NavLink } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid="sm">
                <NavLink className='navbar-brand' to={"/"}>
                    <img
                        src={Logo}
                        width="100%"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </NavLink>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                            Carental
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav
                            className="justify-content-end flex-grow-1 pe-3 text-align-center"
                        >
                            <NavLink to={"/"} className='nav-link header-link'>My Ride</NavLink>
                            <NavLink to={"/"} className='nav-link header-link'>Become to Renter</NavLink>
                            <NavLink to={"/"} className='nav-link header-link'>About us</NavLink>
                            <div class="vr"></div>
                        </Nav>
                        <Nav>
                            <div className="btn-auth">
                                <Button variant='light btn-login' >Sigh in</Button>
                                <Button variant='outline-dark btn-register' >Sign up</Button>
                            </div>
                            {/* <NavDropdown title="Setting" id="offcanvasNavbarDropdown-expand-lg">
                            <NavDropdown.Item >Login</NavDropdown.Item>
                            <NavDropdown.Item >Logout</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>




    )
}

export default Header