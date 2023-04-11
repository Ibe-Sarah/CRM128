import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import Grid from './component/grid';
import New from './component/new';
import Toggle from './component/toggle';
import Overlay from './component/overlay'
import ListComponent from './component/list';
import Form from './component/newTask';
import { useState } from 'react';
import Project from './component/project';
import Button from './component/button'
import Lead from './component/lead';
import { Container } from 'react-bootstrap';
import { useRef } from 'react';
import { BrowserRouter, Routes, Route,Link, Navigate} from "react-router-dom";
import Mechanical from './component/mechanical';
import Option from './component/options';
import Edit from './component/edit';
import Notification from './component/notification';
import Grid1 from './component/grid1';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import Breadcrumbs from './component/breadcrumb';
import { IoGrid} from "react-icons/io5";
import {TfiLayoutListThumbAlt} from 'react-icons/tfi'
import AddUserDetails from './component/adduserdetails';
import Addmedia from './component/addmedia';

const engine = new Styletron();
function App() {
  const [rangeValue, setRangeValue] = useState(50);
  const divRef = useRef(null);

  // const [displayMain, setDisplayMain] = useState(true);
  const [displayGrid, setDisplayGrid] = useState(true);
  const [displayList, setDisplayList] = useState(false);
  const [displayDetails, setDisplayDetails]= useState(false);
const [color, setColor]= useState('#003E9C')
  const handleClickGrid =color => {
    setDisplayGrid(true);
    setDisplayList(false);
    setDisplayDetails(false);
    setColor(color)
  };
  useEffect(()=>{
<IoGrid style={{color: color
}}/>
  },[color])

  const handleClickList = () => {
    const div = divRef.current;
    setDisplayGrid(false);
    setDisplayList(true);
    setDisplayDetails(false);
  };
  const [showForm, setShowForm] = useState(false);

const handleClickDetails = () => {
  setDisplayDetails(true);
  setDisplayGrid(false);
  setDisplayList(false);
}
const handleRangeChange = (event) => {
  setRangeValue(event.target.value);
};


  return( 
    
    

<div>
  
  <BrowserRouter>
<Header/>

<New/> 
 <Sidebar/>


<Breadcrumbs /> 


     
    


    <div className="icons">
      
    <Link to="/">
  <IoGrid style={{ color: '#003E9C' }} className='frame' />
</Link>

<Link to="/list">
  <TfiLayoutListThumbAlt style={{ color: '#003E9C' }} className='sort' />
</Link>
 </div>
      {/* {displayGrid && <Grid />}
      {displayList && <ListComponent />}
       {displayDetails && <Project />}  */}

       <Routes>
       <Route path="/" element={<Navigate to="/CRM" />} />
        <Route path="/CRM" element={<Grid />} />
        <Route path="/atlantic" element={<Project />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/list" element={<ListComponent />} />
  </Routes>  

  
    <div>
        
      </div>



</BrowserRouter>
</div>
);
}

export default App;
