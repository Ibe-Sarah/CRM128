import React from 'react';
 import { Navbar, Form, FormControl, Button, InputGroup, Container, Nav, NavDropdown } from 'react-bootstrap';
 import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserInfo from './user';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Notification from './notification';
import { useState } from 'react';
import {AiOutlineSearch} from "react-icons/ai";


function Header() {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(true);
  };
  const handleCloseForm = () => {
    setShowNotification(false);
  };
  return (
    <Navbar bg="#F6f6F6" expand="lg" style={{borderBottom:'1px solid #B0B0B0', marginTop:'0.5em'}}>
      <Container >
        <h1 className='home'><img src= {process.env.PUBLIC_URL + "/CRM128.png"} style={{width:'5em', marginBottom:'0.5em'}}></img></h1>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav"  /> */}
        <Navbar.Collapse  style={{backgroundColor: '#F6F6F6', width:'10em'}}id="basic-navbar-nav" className='ml-auto'>
          <Nav className="ml-auto">
           <div inline style={{backgroundColor: '#F6F6F6', }}> 
          
          <FormControl  type="text" style={{backgroundColor: '#EBEDF0',  paddingLeft: '24px',
 position: 'relative', display: 'inline-block', border:'none'}}  placeholder="       Search" className="search-input" />
          {/* <FontAwesomeIcon icon={faSearch} className='ml-3'/> */}
          <AiOutlineSearch style={{position: 'absolute', top:25,color:'#0047B3', marginLeft: '0.5em', width:'2em', height: '1.5em'}}/>
                </div> 
                
            <FontAwesomeIcon icon={faBell}  style={{backgroundColor: '#F6F6F6'}}className="ml-5" onClick={handleNotificationClick} />
            {showNotification && (
        <div className="overlayz" onClick={handleCloseForm}>
          <div className="form-popupz" onClick={(e) => e.stopPropagation()}>
            {/* <button onClick={handleCloseForm}>Close</button> */}
            <Notification />
          </div>
        </div>
      )}


          </Nav>
          <UserInfo name="Josiah Gana" position="Admin" style={{backgroundColor: '#F6F6F6', }} />

        </Navbar.Collapse>
       </Container>
       
     </Navbar  >
    
  );
}

export default Header;
