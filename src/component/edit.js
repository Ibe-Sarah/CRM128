import React from "react";
import { HiX } from "react-icons/hi";


function Edit (){
    return (
    <form className="edit">
      
    <h4 className="Headz">  <p id="task">TASK <HiX style={{marginLeft:'36em'}}/></p>
<h4 className="install">Installation of mechanical device</h4> </h4>
  <label htmlFor="title"> Project Title:</label>
  <input type="text" id="title" name="title" placeholder="Enter title" />

<div className="form-section">
  <label htmlFor="startDate">Start Date:
  <input type="date" id="startDate" name="startDate" /></label>
  
    <label htmlFor="dueDate">Due Date:
  <input type="date" id="dueDate" name="dueDate" /></label>


  <label htmlFor="project">Project:
  <select id="project" name="project">
    <option value="project1">Project 1</option>
    <option value="project2">Project 2</option>
    <option value="project3">Project 3</option>
  </select>
  </label>



  <label htmlFor="department">Department:
        <select id="department" name="department">
    <option value="department1">Department 1</option>
    <option value="department2">Department 2</option>
    <option value="department3">Department 3</option>
  </select>
  </label>

  <label htmlFor="assignedTo">Assigned To:
  <input type="text" id="assignedTo" name="assignedTo" />
  </label>

  <label htmlFor="supervisedBy">Supervised By:
  <input type="text" id="supervisedBy" name="supervisedBy" />
  </label>
</div>
<label htmlFor="description">Description:</label>
      <textarea id="description" name="description" placeholder="Enter Description"></textarea>

      <button id="savez" type="submit">Update</button>
</form>
)
}

export default Edit