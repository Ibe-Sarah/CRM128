import React from 'react';
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
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Mechanical from './component/mechanical';
import Option from './component/options';




function App() {
  const [rangeValue, setRangeValue] = useState(50);
  const divRef = useRef(null);

  // const [displayMain, setDisplayMain] = useState(true);
  const [displayGrid, setDisplayGrid] = useState(true);
  const [displayList, setDisplayList] = useState(false);
  const [displayDetails, setDisplayDetails]= useState(false);

  const handleClickGrid = () => {
    setDisplayGrid(true);
    setDisplayList(false);
    setDisplayDetails(false);
  };

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
<>
      <div className="icons">
        {/* <Grid ref = {divRef} clickDetails={handleClickDetails}/>  */}
       {/* <div className="first" onClick={handleClickDetails} style ={{display : 'none'}}><p>Start Date: 20 Dec 2022 <Button/></p><h4>EMZOR PHARM INDUSTRY LTD</h4>
          <span className='bar'>Progress:   {rangeValue}%</span>
            <input
        type="range"
        min="0"
        id='range'
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
      />
      
            <Lead 
            position="Project Lead"
            name='Joe Doe'
            imageSrc={process.env.PUBLIC_URL + "/Rectangle..jpg"}
            timeLeft="2 weeks left"
          /></div>  */}
   {/* <div clickDetails={handleClickDetails} className='first' ></div> */}
      <img onClick={handleClickGrid} className='frame' src= {process.env.PUBLIC_URL + "/images/Frame.jpg"} alt= 'frame'></img>
        <img onClick={handleClickList} className= 'sort' src={process.env.PUBLIC_URL + "/images/Vector.jpg"} alt="" ></img>
      </div>
      {displayGrid && <Grid />}
      {displayList && <ListComponent />}
      {/* {displayDetails && <Project />} */}

    


    </>


  
  
    {/* <Project/> */}
    {/* <div><Link to='/project'> Project</Link> </div> */}
    {/* <div><Link to='/'> ject</Link> </div> */}
    


</BrowserRouter>
{/* <Mechanical/> */}
<Option/>
</div>
);
}

export default App;
