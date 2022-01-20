import React from 'react';

import './Navbar.css'
import logo from '../../Images/logo.png'
import { Navbar, Nav, Container} from 'react-bootstrap';

export default function Navigation(props) {
    return(
        <Navbar className='customNavbar' variant='light' expand='sm' fixed='top'>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="logo" alt="Home"/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/about-us"><span className={getClass(props.active, "About Us")}> About Us </span></Nav.Link>
                        <Nav.Link href="/our-services"><span className={getClass(props.active, "Our Services")}>Our Services</span></Nav.Link>
                        <Nav.Link href="/our-projects"><span className={getClass(props.active, "Our Projects")}>Our Projects</span></Nav.Link>
                        <Nav.Link href="/contact-us"><span className={getClass(props.active, "Contact Us")}>Contact Us</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>       
    )
}

function getClass(activePage, page) {
    if(page === activePage) {
        return "activeText"
    } else {
        return "linkText"
    }
}
