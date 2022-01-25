import React from 'react';

import { Button, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="menuBackground">
                <Container>
                    <Navbar.Brand className='mx-4 text-white' href="#home"><i class="fas fa-play"></i> Gumstack Logo
</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto text-white">

                            <NavDropdown  title="Use Cases" className='style' id="collasible-nav-dropdown">
                                <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link className='mx-4 text-white' href="#pricing">How it works</Nav.Link>
                            <Nav.Link className='mx-4 text-white' href="#features">How it works</Nav.Link>
                            <Nav.Link className='mx-4 text-white' href="#features">Pricing</Nav.Link>
                            <Nav.Link className='mx-4 text-white' href="#features">Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;