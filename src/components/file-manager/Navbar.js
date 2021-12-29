import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../static/css/file-management/Navbar.scss'
import { BsGlobe } from 'react-icons/bs'


export default function NavbarComponent() {
    return (
        <div className="navbar" expand="s" >
            <Navbar.Brand className="font-face-ae" as={NavLink} to="/">
                Asimov Travel Dashboard
            </Navbar.Brand>
            <Nav>
                <Nav.Link className="profile-link" as={NavLink} to="/user">
                    <button className="profile-btn"> Profile <BsGlobe /></button>
                </Nav.Link>
            </Nav>
            
        </div>
    )
}
