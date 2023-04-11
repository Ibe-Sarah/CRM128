import { useState } from "react";
import './newTask.css'
import { HiX } from "react-icons/hi";


const NewtaskForm = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleMoreDetailsClick = () => {
    setShowMoreDetails(!showMoreDetails);
  };
  const [showForm, setShowForm] = useState(false);

  
  const handleCloseForm = () => {
    setShowForm(false);
  };


  return (
    <form>
      
        <h4 className="Head"><br className="smallbreak"/> Create New Project  <HiX  style={{ marginLeft:'8em', marginTop:'-0.2em', cursor:'pointer'}}/>
        </h4>
        
      <label htmlFor="title">Title:</label>
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
      
  <label htmlFor="file"></label>
   <input id="file" name="file" type='file'  placeholder="Add Media"></input>


      <button id="save" type="submit">Save</button>
      
    </form>
  );
};
export default NewtaskForm;