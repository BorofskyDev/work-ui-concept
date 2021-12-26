import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expanded="sm">
            <Navbar.Brand as={Link}>
                Asimov Travel Dashboard
            </Navbar.Brand>
            
        </Navbar>
    )
}
