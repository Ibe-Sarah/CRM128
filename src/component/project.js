import  React, { useState } from 'react';

import { Container, Row, Col, Card } from "react-bootstrap";
import './grid.css';
import { ProgressBar } from "react-bootstrap";
import Lead from "./lead";
import Button from './button'
import Team from './team';
import './project.css';



function Project({ progress, label, item }) {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  
    return (
        <container>
       <div className="main">
         
        <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>Atlantic Hall School <div className='subpro'>Mechanical</div></h4>
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
            position="Assigned to"
            name='Joe Doe'
            imageSrc={process.env.PUBLIC_URL + "/Rectangle..jpg"}
            timeLeft="2 weeks left"
          /></div> 
<div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4 className='propro'>Atlantic Hall School<div className='subpro'>HAVC</div></h4>
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
            position="Assigned to"
            name='Joe Doe'
            imageSrc={process.env.PUBLIC_URL + "/Rectangle..jpg"}
            timeLeft="2 weeks left"
          />
              </div>
              <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>Atlantic Hall School<div className='subpro'>Civil</div></h4>
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
            position="Assigned to"
            name='Joe Doe'
            imageSrc={process.env.PUBLIC_URL + "/Rectangle..jpg"}
            timeLeft="2 weeks left"
          />
              </div>

              <div className="first"><p>Start Date: 20 Dec 2022 <Button/></p><h4>Atlantic Hall School<div className='subpro'>Mechanical</div></h4>
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
            position="Assigned to"
            name='Joe Doe'
            imageSrc={process.env.PUBLIC_URL + "/Rectangle..jpg"}
            timeLeft="2 weeks left"
          />
              </div>

             

</div>
<table className='tableOf'>
  <thead> List of Task
    <tr>
      <th>Task</th>
      <th>Assigned To</th>
      <th>Unit</th>
      <th>Due Date</th>

    </tr>
  </thead>
  <tbody>
   
    <tr>
    <td>Installation of Mechanical ...</td>
      <td>John Doe</td>
      <td>Mechanical</td>
      <td>30 Jun 2023</td>
      </tr>
      <tr>
      <td>Installation of Mechanical ...</td>
      <td>John Doe</td>
      <td>Mechanical</td>
      <td>30 Jun 2023</td>
      </tr>

      <tr>
      <td>Installation of Mechanical ...</td>
      <td>John Doe</td>
      <td>Mechanical</td>
      <td>30 Jun 2023</td>
      </tr>

      <tr>
      <td>Installation of Mechanical ...</td>
      <td>John Doe</td>
      <td>Mechanical</td>
      <td>30 Jun 2023</td>
    
      </tr>

      <tr>
      <td>Installation of Mechanical ...</td>
      <td>John Doe</td>
      <td>Mechanical</td>
      <td>30 Jun 2023</td>
    
      </tr>

      <tr>
      <td>Installation of Mechanical ...</td>
      <td>John Doe</td>
      <td>Mechanical</td>
      <td>30 Jun 2023</td>
          </tr>

  </tbody>
</table>
<Team 
            position="Project Lead"
            name='Joe Doe'
            imageSrc={process.env.PUBLIC_URL + "/Rectangle..jpg"}
          
          />

 <Container className="teamzz"> 
      <div className="mate"><img
        width={22}
        height={22}
        className="mr-3"
        src={process.env.PUBLIC_URL + "/Rectangle..jpg"}
        // alt="User's profile"
        />
    <span className="n"><p>John Doe </p>
    <span className="p"><p>Project Lead</p></span>
        </span>
       
   
    </div>
    </Container>
    <Container className="teamzz"> 
      <div className="mate"><img
        width={22}
        height={22}
        className="mr-3"
        src={process.env.PUBLIC_URL + "/Rectangle..jpg"}
        // alt="User's profile"
        />
    <span className="n"><p>John Doe </p>
    <span className="p"><p>Project Lead</p></span>
        </span>
       
   
    </div>
    </Container>
    <Container className="teamzz"> 
      <div className="mate"><img
        width={22}
        height={22}
        className="mr-3"
        src={process.env.PUBLIC_URL + "/Rectangle..jpg"}
        // alt="User's profile"
        />
    <span className="n"><p>John Doe </p>
    <span className="p"><p>Project Lead</p></span>
        </span>
       
   
    </div>
    </Container>
    <Container className="teamzz"> 
      <div className="mate"><img
        width={22}
        height={22}
        className="mr-3"
        src={process.env.PUBLIC_URL + "/Rectangle..jpg"}
        // alt="User's profile"
        />
    <span className="n"><p>John Doe </p>
    <span className="p"><p>Project Lead</p></span>
        </span>
       
   
    </div>
    </Container>
    <Container className="teamzz"> 
      <div className="mate"><img
        width={22}
        height={22}
        className="mr-3"
        src={process.env.PUBLIC_URL + "/Rectangle..jpg"}
        // alt="User's profile"
        />
    <span className="n"><p>John Doe </p>
    <span className="p"><p>Project lead</p></span>
        </span>
       
   
    </div>
    </Container>



</container>
        )
    }
  export default Project;