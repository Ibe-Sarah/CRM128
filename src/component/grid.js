import React, { useState } from 'react';

import { Container, Row, Col, Card } from "react-bootstrap";
import './grid.css'
import { ProgressBar } from "react-bootstrap";
import Lead from "./lead";
import Button from './button'


function Grid({ progress, label }) {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
    return (
       <Container className="main">
         
        <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>EMZOR PHARM INDUSTRY LTD</h4>
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
          /></div>
<div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>ATLANTIC HALL SCHOOL</h4>
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
          />
              </div>
              <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>EMZOR PHARM INDUSTRY LTD</h4>
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
          />
              </div>

              <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>EMZOR PHARM INDUSTRY LTD</h4>
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
          />
              </div>

              <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>EMZOR PHARM INDUSTRY LTD</h4>
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
          />
              </div>

              <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>EMZOR PHARM INDUSTRY LTD</h4>
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
          />
              </div>

              <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>EMZOR PHARM INDUSTRY LTD</h4>
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
          />
              </div>

              <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>EMZOR PHARM INDUSTRY LTD</h4>
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
          />
              </div>
</Container>
        )
    }
  export default Grid;