import  React, { useState } from 'react';

import { Container, Row, Col, Card } from "react-bootstrap";
import './grid.css';
import { ProgressBar } from "react-bootstrap";
import Lead from "./lead";
import Button from './button'
import Team from './team';
import './project.css';
import Progrid1 from './progrid1';
import Progrid2 from './progrid2';
import Progrid3 from './progrid3';
import Progrid4 from './progrid4';
import Protable from './protable';
import Mechanical from './mechanical';
import CreateDept from './createdept';



function Project({ progress, label, item }) {
  const [rangeValue, setRangeValue] = useState(50);
  const [displayDeptDetails, setDisplayDeptDetails]= useState(false);
  const [displayProGrid1, setDisplayProGrid1] = useState(true);
  const [displayProGrid2, setDisplayProGrid2] = useState(true);
  const [displayProGrid3, setDisplayProGrid3] = useState(true);
  const [displayProGrid4, setDisplayProGrid4] = useState(true);
  const [displayProTable, setDisplayProTable] = useState(true);
 
  const handleClickDeptDetails = () => {
    setDisplayDeptDetails(true);
    setDisplayProGrid1(false);
    setDisplayProGrid2(false);
    setDisplayProGrid3(false);
    setDisplayProGrid4(false);
    setDisplayProTable(false);

  }  

 

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  
    return (
     
        <Container className='projectz'>
               <CreateDept/>
       <div className="main">
       {displayDeptDetails && <Mechanical />}
         {displayProGrid1 && <Progrid1 clickDeptDetails= {handleClickDeptDetails}/>}
         {displayProGrid2 && <Progrid2 />}
         {displayProGrid3 && <Progrid3 />}
         {displayProGrid4 && <Progrid4 />}

      
             

</div>

{displayProTable && <Protable />}

</Container>
        )
    }
  export default Project;