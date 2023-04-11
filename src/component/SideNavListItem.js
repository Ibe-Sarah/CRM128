import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { menuData } from './constant';

const SidebarLink= styled(Link)`
display: flex;
color: #091E42;
justify-content: space-between;
align-items: center;
paddig: 20px;
padding-top:10px;
list-style:none;
height: 50px;
margin-left: '-2em';
text-decoration:none;
font-size: 16px;
font-family: 'Archivo', sans-serif;
font-weight: '800'
//  margin-top:2em

&:active {
    background: #FFFFFF;
    border-right: 4px solid blue;
    cursor: pointer;
}
&:hover {
    background: #FFFFFF;
    border-right: 4px solid blue;
    cursor: pointer;
}
`;


const SidebarLabel=styled.span`
margin-left: 0.5em;
margin-top: 3em
` ;

const DropdownLink =styled(Link)`
background:#FFFFFF;
height: 30px;
padding-left:
1rem;
display: flex;
align-items: center;
text-decoration: none;
color: #091E42;

&:hover
`;

const SideNavListItem= ({item})=> {
    const [subnav, setSubnav] = useState(false)
    const showSubnav =()=> setSubnav(!subnav)
    return(
        <>
        <SidebarLink  onClick={item.subNav && showSubnav}>
        <div>
            {item.icon}
            <SidebarLabel >{item.title}</SidebarLabel>
        </div>
        <div >
            {item.subNav && subnav
             ? item.iconOpened
             : item.subNav
             ?item.iconClosed
             :null
            }
        </div>
        </SidebarLink>
        {subnav  && item.subNav.map((item, index)=>{
            
            return(
                <DropdownLink  to ={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                  </DropdownLink>
            )
        })}
        </>
    )
}
export default SideNavListItem