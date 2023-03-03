import React from "react";
import { Container } from "react-bootstrap";
import './options.css'

function Option (){
    return(
<Container>
        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/add.jpg"}></img> <p className="imgcap">New Task</p>
        </div>

        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/rename.jpg"}></img> <p className="imgcap">Rename</p>
        </div>

        <div className="labels">
        <img className = 'addz' src= {process.env.PUBLIC_URL + "/edit.jpg"}></img> <p className="imgcap">Edit Task</p>
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