import React, { useState } from 'react';
import MediaQuery from 'react-responsive'

import { Container, Row, Col, Card } from "react-bootstrap";
import './grid.css'
import { ProgressBar } from "react-bootstrap";
import Lead from "./lead";
import Button from './button'
import {  Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Grid2 from './grid2';
import Grid3 from './grid3';
import Grid4 from './grid4';
import Grid5 from './grid5';
import Grid6 from './grid6';
import Grid7 from './grid7';
import Grid8 from './grid8';
import Grid1 from './grid1';
import Project from './project';
import New from './new';
import Breadcrumbs from './breadcrumb';
import Mechanical from './mechanical';


function Grid({ progress, label, index, title, description, clickDetails, onClick  }) {
  const [rangeValue, setRangeValue] = useState(50);
  const [selectedGridItem, setSelectedGridItem] = useState(null);
  const [displayDetails, setDisplayDetails]= useState(false);
  const [displayGrid1, setDisplayGrid1] = useState(true);
  const [displayGrid2, setDisplayGrid2] = useState(true);
  const [displayGrid3, setDisplayGrid3] = useState(true);
  const [displayGrid4, setDisplayGrid4] = useState(true);
  const [displayGrid5, setDisplayGrid5] = useState(true);
  const [displayGrid6, setDisplayGrid6] = useState(true);
  const [displayGrid7, setDisplayGrid7] = useState(true);
  const [displayGrid8, setDisplayGrid8] = useState(true);




  const handleClickDetails = () => {
    setDisplayDetails(true);
    setDisplayGrid1(false);
    setDisplayGrid2(false);
    setDisplayGrid3(false);
    setDisplayGrid4(false);
    setDisplayGrid5(false);
    setDisplayGrid6(false);
    setDisplayGrid7(false);
    setDisplayGrid8(false);
 
  }  

  const handleClick = () => {
    onClick(index);
  };

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  
    return (
      
      <div>
        
        {/* <p className='dash'>Dashboard</p> */}
        
       <Container className="main">
               {/* <Grid1 clickDetails={handleClickDetails}/> */}
         {displayDetails && <Project />}
         {displayGrid1 && <Grid1 clickDetails= {handleClickDetails}/>}
         {displayGrid2 && <Grid2 />}
         {displayGrid3 && <Grid3 />}
         {displayGrid4 && <Grid4 />}
       
         {displayGrid5 && <Grid5 />}
         {displayGrid6 && <Grid6 />}
         {displayGrid7 && <Grid7 />}
         {displayGrid8 && <Grid8 />}
      

          {/* <Grid2/>
          <Grid3/>
          <Grid4/>
          <Grid5/>
          <Grid6/>
          <Grid7/>
          <Grid8/>
           */}
{/* 
<Breadcrumbs />
<Routes>
          <Route exact path="/" component={<Grid/>} />
          <Route path="/atlantic" component={<Project/>} />
          <Route path="/mechanical" component={<Mechanical/>} />
          </Routes> */}
          

      
</Container>
</div>

        )
    }
  export default Grid;