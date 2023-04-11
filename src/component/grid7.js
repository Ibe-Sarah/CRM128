import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './grid.css'
import { ProgressBar } from "react-bootstrap";
import Lead from "./lead";
import Button from './button'
import Button7 from "./button7";

function Grid7({ progress, label, index, title, description, clickDetails, onClick  }) {
    const [rangeValue, setRangeValue] = useState(50);
    const [selectedGridItem, setSelectedGridItem] = useState(null);
  
    const handleClick = () => {
      onClick(index);
    };
  
    const handleRangeChange = (event) => {
      setRangeValue(event.target.value);
    };
    
  
return (

<div style={{marginTop:'3em'}} className="first"><p>Start Date: 20 Dec 2022 <Button7/></p><h4>ATLANTIC HALL SCHOOL</h4>
<span className='bar'><p>Progress:</p>   <p>{rangeValue}%</p></span>          <img  src= {process.env.PUBLIC_URL + "/range.png"}
        type="range"
        min="0"
        id='range'
        max="100"
        width='3px'
        value={rangeValue}
        onChange={handleRangeChange}
      ></img>
         
      
            <Lead 
            position="Project Lead"
            name='Joe Doe'
            imageSrc={process.env.PUBLIC_URL + "/Rectangle..jpg"}
            timeLeft="2 weeks left"
          />
              </div>
)}
export default Grid7;