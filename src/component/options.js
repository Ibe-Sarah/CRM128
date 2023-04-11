import React from "react";
import { Container } from "react-bootstrap";
import './options.css'
import { useState } from "react";
import Edit from "./edit";
import './edit.css'
function Option (){

    const [displayTask, setDisplayTask] = useState(false);
    const [displayOptions, setDisplayOptions] = useState(false)

    const handleTask =()=>{
    setDisplayTask(true)
    
    };
     const handleCloseForm = () => {
          setDisplayTask(false);

        };
     
    return(
<Container>
        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/add.jpg"}></img> <p className="imgcap">New Task</p>
        </div>

        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/rename.jpg"}></img> <p className="imgcap">Rename</p>
        </div>

        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/edit.jpg"}></img> <p className="imgcap" onClick={handleTask}> Edit Task
       {/* {displayOptions && <Option/>} */}
        {displayTask && (
        <div className="overlayy" onClick={handleCloseForm}>
          <div className="form-popupp" onClick={(e) => e.stopPropagation()}>
            {/* <button onClick={handleCloseForm}>Close</button> */}
            <Edit />
            {/* NewtaskForm has the cotent of 'Add New Project' while Form has the content of 'Add New Task' */}
          </div>
        </div>
      )}
        </p>
        </div>

        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/Add File.jpg"}></img> <p className="imgcap">Add Media</p>
        </div>

        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/Add User 1.jpg"}></img> <p className="imgcap">Add User</p>
        </div>

        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/Remove User.jpg"}></img> <p className="imgcap">Remove User</p>
        </div>

        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/Delete.jpg"}></img> <p className="imgcap">Delete User</p>
        </div>

        </Container>
    )

}
export default Option;