import React, { useState } from 'react';
import { Dropdown,Form, DropdownButton, } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCalculator, faUserFriends, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import { Navigation } from "baseui/side-navigation";
import { Select } from "baseui/select";
import SideNavListItem from './SideNavListItem.js';
import { menuData } from './constant';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { FaBars, FaTimes } from 'react-icons/fa';



const Nav = styled.div`
background: #FFFFFF;
display: flex;
justify-content: flex-start;
align-Items: center;
overflowY: auto;


`;
// const NavIcon = styled(Link)`
// margin-left: 3rem;
// font-size: 2rem;
// // height: 80px;
// display:flex;
// justify-content: flex-start;
// align-items: center;

// `;
const SidebarNav=styled.nav`
background: #FFFFFF;
width:250px;
 height: 100vh;
display: flex;
justify-content: center;
position:fixed;
top: 0;


left: ${({sidebar})=> (sidebar ? '0' : '-100%')}
transition: 350ms;

border-right: 1px solid #B0B0B0;
border-bottom: 2px solid #B0B0B0;
box-shadow: 0 8px 20px 0 rgba(0,0,0,0.2) ;

//  `;
 const SidebarWrap= styled.nav`
 width: 70vh;
 margin-top: 5.4em;
 height: 200%;
 padding-left: 2em; 
 overflow-y:auto;
 background-color: #FFFFFF !important;
//  border-right: 0.5px solid #B0B0B0;
 border-top:1px solid #B0B0B0;
 box-shadow: 0 8px 20px 0 rgba(0,0,0,0.2) ;

 `
 

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
        
        <Nav >
          {/* <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar}/>
              </NavIcon> */}
        </Nav>
        <div className="sidebar__toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      {sidebarOpen && ( <SidebarNav   >
          <SidebarWrap>
            {/* <NavIcon to='#'><AiIcons.AiOutlineClose onClick={showSidebar}/></NavIcon> */}
                
                {menuData.map((item, index) =>
                {
                    return <SideNavListItem item={item} key={index}/>
                                    })}
            </SidebarWrap>
        </SidebarNav>)}
        
        </>
    );
};
export default Sidebar