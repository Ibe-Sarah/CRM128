
import React from 'react'; 
import { FaTachometerAlt, FaUsers, FaCalculator, FaUserFriends, FaCog, FaSignOutAlt, FaPlusSquare, FaProjectDiagram, FaHouseUser, FaMicrosoft} from 'react-icons/fa';
import {styled, useStyletron} from 'baseui';
import { Select } from "baseui/select";
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/io'
import {MdDashboard} from 'react-icons/md'
import {PeopleTeam20Filled, CalendarAgenda20Filled, Glance20Filled}from '@fluentui/react-icons'
import {HiOutlineBuildingStorefront, HiArrowTrendingUp, HiUserPlus, HiRectangleGroup, HiOutlineArrowTrendingUp, HiChevronDown, HiChevronUp} from 'react-icons/hi2'
import { IoLogOut } from 'react-icons/io5';




export const menuData = [

    <h1 className='home' style={{backgroundColor: '#FFFFFF'}}>GEN128 Ltd.</h1>
,


    {
        
        title: 'Overview',
        path:'/dashboard',
        icon: <Glance20Filled size={32} style={{ marginRight: '0.2rem', marginLeft:'-0.6em', marginTop:'-0.3em', color:'#003E9C'}}/>
             },
    {
        title: 'Clients',

        
        icon: <HiOutlineBuildingStorefront size={20} fill='#003E9C' style={{ marginRight: '0.2rem', marginLeft:'-0.6em', marginTop:'-0.3em',color:'#003E9C'}} />,
        
        iconClosed:<HiChevronDown/>,
         iconOpened:<HiChevronUp/>,

        subNav:[
        {
            title:'Client 1',
            path:'client/client1',
            
        },
        {
            title:'Client 1',
            path:'client/client1',
            
        },
        {
            title:'Client 1',
            path:'client/client1',
            
        }
    ]
  
        
    },
    
    {
        title: 'Appointment',
        icon: <CalendarAgenda20Filled size={30} style={{ marginRight: '0.2rem',marginLeft:'-0.6em', marginTop:'-0.3em',color:'#003E9C' }} />,
        
    },
    {
        title: 'Project Management',
        icon: <HiRectangleGroup size={23} style={{ marginRight: '0.1rem', color:'#003E9C', marginTop:'-0.3em',marginLeft:'-0.6em' }} />,
        iconClosed:<HiChevronDown/>,
        iconOpened:<HiChevronUp/>,
       active: true,

        subNav:[
        {
            title:'Atlantic Hall School',
            path:'/atlantic',
            // icon: <IoIcons.IoIosPaper/>
            
        },
        {
            title:'Emzor Pharm Ltd',
            path:'dashboard/emzor',
            
        },
        {
            title:'Apple',
            path:'client/client1',
            
        }
    ]
    
    },
    {
        title: 'Human Resource',
        icon: <PeopleTeam20Filled size={28} style={{ marginRight: '0.2rem',marginLeft:'-0.6em', marginTop:'-0.3em',color:'#003E9C' }} />,
        iconClosed:<HiChevronDown/>,
        iconOpened:<HiChevronUp/>,

        subNav:[
        {
            title:'HR',
            path:'client/client1',
            
        },
        {
            title:'HR1',
            path:'client/client1',
            
        },
        {
            title:'HR2',
            path:'client/client1',
            
        }
    ]
    
    
    },
    {
        title: 'Accounting',
        icon: <HiArrowTrendingUp size={26} fill='#003E9C' style={{ marginRight: '0.1rem', marginLeft:'-0.8em', color:'#003E9C', marginTop:'-0.3em' }} />,
        iconClosed:<HiChevronDown/>,
        iconOpened:<HiChevronUp/>,

      
        subNav:[
        {
            title:'Data',
            path:'client/client1',
            
        },
        {
            title:'Statistics',
            path:'client/client1',
            
        },
        {
            title:'Budget',
            path:'client/client1',
            
        }
    ]
    
    },
    {
        title: 'Invite Teammates',
        icon: <HiUserPlus size={23} style={{ marginRight: '0.1rem', color:'#003E9C',marginTop:'-0.3em', marginLeft:'-0.6em'}} />,
    },
    {
        title: 'Settings',
        icon: <FaCog  size={20} style={{ marginRight: '0.2rem',marginTop:'-0.3em', color:'#003E9C',marginLeft:'-0.6em' }} />,
    },
    {
        title: 'Logout',
        icon: <IoLogOut size={23} style={{ marginRight: '0.1rem',marginTop:'-0.3em', marginLeft:'-0.6em', color:'#003E9C' }} />,
    }
]
const img =styled('div', {
    background: 'blue' ,
    color:'blue',
    display: ''
})
