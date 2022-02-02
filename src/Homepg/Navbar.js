import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Logo from "./Logo.png";
import User from "./userIcon.png";
export default class Navb extends Component {
    render() {
        return ( 
        <div >
            <>
            <Navbar bg = ""variant = "light" >
            <Container >
            <Navbar.Brand href = "#home" >
            <img src = {Logo}
            width = "80"
            height = "80"
            className = "d-inline-block align-top"
            alt = "" />
            </Navbar.Brand> 
            <b><font size="5"><center><Nav className = "me-auto"> 
            <NavDropdown title="Courses" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Maths</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href = "#features" > About us </Nav.Link> 
            <Nav.Link href = "#features" > Smtng </Nav.Link> 
            </Nav></center></font></b>
            <Nav>
            <ToggleButton className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-secondary"
            value="1">
            <img src = {User}
            width = "40"
            height = "40"
            border-radius="50px"
            className = "d-inline-block align-top"
            alt = "" /></ToggleButton>
            </Nav>
            </Container> 
            </Navbar > 
            <br/>
            </> 
        </div>
        )
    }
}