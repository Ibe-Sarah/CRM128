import React, { useState } from 'react';
import { Dropdown,Form, DropdownButton, } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCalculator, faUserFriends, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import { Navigation } from "baseui/side-navigation";
import { Select } from "baseui/select";
import { useStyletron} from 'baseui';
import SideNavListItem from './SideNavListItem.js';
import { menuData } from './constant';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'


const Nav = styled.div`
background: #FFFFFF;
display: flex;
justify-content: flex-start;
align-Items: center;
overflowY: auto;
`;
// const NavIcon = styled(Link)`
// margin-left: 2rem;
// font-size: 2rem;
// // height: 80px;
// display:flex;
// justify-content: flex-start;
// align-items: center;

// `;
const SidebarNav=styled.nav`
background: #FFFFFF;
width:250px;
 height: 200%;
display: flex;
justify-content: center;
position:fixed;
top: 0;


left: ${({sidebar})=> (sidebar ? '0' : '-100%')}
transition: 350ms;
border-right: 1px solid #B0B0B0;
border-bottom: 2px solid #B0B0B0;
box-shadow: 0 8px 20px 0 rgba(0,0,0,0.2) ;

 `;
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

const Sidebar = ({open, setOpen}) => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = ()=> setSidebar(!sidebar)
    const [css] = useStyletron();
    return (
        <>
        <Nav>
          
        </Nav>
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              
                {menuData.map((item, index) =>
                {
                    return <SideNavListItem item={item} key={index}/>
                                    })}
            </SidebarWrap>
        </SidebarNav>
        </>
    );
};
export default Sidebar