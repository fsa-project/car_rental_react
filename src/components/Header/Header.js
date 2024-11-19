import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo51.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import Avatar from '../../assets/static/image/avatar-default.jpg'
import './Header.scss'
import { useSelector } from 'react-redux';

const Header = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth');
  }
  const handleRegister = () => {
    navigate('/auth');
  }

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
              {
                isAuthenticated === true ?
                  <>
                    <div className="btn-auth">
                      <Button variant='light btn-login' onClick={() => handleLogin()}>Sigh in</Button>
                      <Button variant='outline-dark btn-register' onClick={() => handleRegister()}>Sign up</Button>
                    </div>
                  </>
                  :
                  <>
                    <div className="dropdown-profile">
                      <div className="avatar avatar--s" onClick={handleImageClick}>
                        <img src={Avatar} loading='lazy' />
                      </div>
                      <NavDropdown
                        title="Do Thuat"
                        id="offcanvasNavbarDropdown-expand-lg"
                        show={showDropdown}
                        onClick={() => handleToggle(true)}
                        onMouseLeave={() => handleToggle(false)}
                      >
                        <NavDropdown.Item >My profile</NavDropdown.Item>
                        <NavDropdown.Item >My Bookings</NavDropdown.Item>
                        <NavDropdown.Item >My Wallet</NavDropdown.Item>
                        <NavDropdown.Item >Log out</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </>
              }





            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>




  )
}

export default Header;
