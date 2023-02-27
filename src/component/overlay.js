import React from "react";
import './overlay.css'

function Overlay() {
    return(
        <div className="projectOverlay">
          <div className="dept">
          <img className='deptimg' src={process.env.PUBLIC_URL + "/images/dept.jpg"}></img> 
          <p>New Department</p>
            </div> 
        </div>
    )
}
export default Overlay