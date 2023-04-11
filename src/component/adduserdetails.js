import { useState } from "react";
import { Button } from "react-bootstrap";
import './newTask.css'
import './adduserdetails.css'


const AddUserDetails = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleMoreDetailsClick = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <form className="userdetails">
      
        <h4 className="Headdd">ADD USER DETAILS </h4>
        <label htmlFor="department">Staff:
            <select id="staff" name="staff">
        <option value="department1">Staff 1</option>
        <option value="department2">Staff 2</option>
        <option value="department3">Staff 3</option>
      </select>
      </label>
    <div className="form-section">
     

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
      <label htmlFor="startDate">Start Date:
      <input type="date" id="startDate" name="startDate" /></label>
      
        <label htmlFor="dueDate">Due Date:
      <input type="date" id="dueDate" name="dueDate" /></label>

      <label htmlFor="task">Task:
      <input type="text" id="task" name="task" />
      </label>

   
</div>

 <div className="detailsbutton">   <button id="close" >Close</button>
      <button className="add" >Add</button></div>
      
    </form>
  );
};
export default AddUserDetails;