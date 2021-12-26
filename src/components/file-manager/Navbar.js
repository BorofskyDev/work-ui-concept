import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="s" >
            <Navbar.Brand as={NavLink} to="/">
                Asimov Travel Dashboard
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={NavLink} to="/user">
                    Profile
                </Nav.Link>
            </Nav>
            
        </Navbar>
    )
}
