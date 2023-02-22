import React from 'react';
 import { Navbar, Form, FormControl, Button, InputGroup, Container, Nav, NavDropdown } from 'react-bootstrap';
 import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserInfo from './user';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <h1 className='home'>GEN128 Ltd.</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='ml-auto'>
          <Nav className="ml-auto">
          <Form inline>
          <FormControl type="text" placeholder="Search" className="search-input" />
          {/* <FontAwesomeIcon icon={faSearch} className='ml-3'/> */}
                </Form>
                
            <FontAwesomeIcon icon={faBell} className="ml-5" />

          </Nav>
          <UserInfo name="Josiah Gana" position="Admin" />

        </Navbar.Collapse>
       </Container>
     </Navbar>
    
  );
}

export default Header;
