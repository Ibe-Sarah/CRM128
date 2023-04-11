import React from "react";
import Lead from "./lead";
import { Container } from "react-bootstrap";
import './team.css'

function Team ({ imageSrc,name, position, timeLeft }) {
    return(
    <div className="members"><h2>Team Members <h3 className="view">View all</h3></h2>

        <Container className="teamz"> 
      <div className="mate"><img style={{marginTop:'-3em'}}
        width={22}
        height={22}
        className="mr-3"
        src={imageSrc}
        // alt="User's profile"
        />
    <span className="n"><p>{name} </p>
    <span className="p"><p>{position}</p></span>
        </span>
       
   
    </div>
    </Container>
    </div>
)

          }
          
          export default Team;