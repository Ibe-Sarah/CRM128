
import  React, { useState } from 'react';

import { Container, Row, Col, Card } from "react-bootstrap";
import './grid.css';
import { ProgressBar } from "react-bootstrap";
import Lead from "./lead";
import Button from './button'
import Team from './team';
import './project.css';
import './team.css'
function Protable({ progress, label, item }) {
    const [rangeValue, setRangeValue] = useState(50);
  
    const handleRangeChange = (event) => {
      setRangeValue(event.target.value);
    };
  
  return(
  

<div>



<table className='tableOf'>
  <thead><span className='all'><p className='listed'>List of Tasks</p> <p className='viewall'>View all</p> </span>
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

 <Container style={{backgroundColor:'#FFFFFF', borderRadius:'16px'}} className="teamzz" > 
      <div className="mate" ><img
        width={22}
        height={22}
        className="mr-3"
        src={process.env.PUBLIC_URL + "/Rectangle..jpg"}
        // alt="User's profile"
        />
    <span  className="n"><p>John Doe </p>
    <span className="p"><p>Project Lead</p></span>
        </span>
       
   
    </div>
    </Container>
    <Container  className="teamzz"> 
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
    <Container  className="teamzz"> 
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
    </div>
    

  )
  }
  export default Protable;