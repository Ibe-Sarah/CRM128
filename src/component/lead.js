import React from "react";
import { Container } from "react-bootstrap";
import './lead.css'



function Lead({ imageSrc,name, position, timeLeft }) {
  return (
    <Container className="img">
      <div className="profile"><img
        width={22}
        height={22}
        className="mr-3"
        src={imageSrc}
        // alt="User's profile"
        />
    <span className="per"><p>{position}: {name}</p>
        </span>
   
    </div>
        <div className="time">
        <p>{timeLeft}</p>
        </div>
        </Container>
        
 );
}

export default Lead;
