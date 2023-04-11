import  React, { useState } from 'react';

import { Container, Row, Col, Card } from "react-bootstrap";
import './grid.css';
import { ProgressBar } from "react-bootstrap";
import Lead from "./lead";
import Button from './button'
import Team from './team';
import './project.css';


function Progrid3({ progress, label, item }) {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return(



<div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4><span className='lantic'>Atlantic Hall School</span><div className='subpro'>Mechanical</div></h4>
<span className='bar'><p>Progress:</p>   <p>{rangeValue}%</p></span>
<img  src= {process.env.PUBLIC_URL + "/range.png"}
        type="range"
        min="0"
        id='range'
        max="100"
        width='3px'
        value={rangeValue}
        onChange={handleRangeChange}
      ></img>
         
  <Lead 
  position="Assigned to"
  name='Joe Doe'
  imageSrc={process.env.PUBLIC_URL + "/Rectangle..jpg"}
  timeLeft="2 weeks left"
/>
    </div>
)
}
export default Progrid3;