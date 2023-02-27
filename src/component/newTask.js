import { useState } from "react";
import './newTask.css'

const Form = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleMoreDetailsClick = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <form>
        <h4>Create New Task x</h4>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" />

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
          <textarea id="description" name="description"></textarea>

      <div onClick={handleMoreDetailsClick} style={{ cursor: "pointer" }}>
        More Details &#x25BC;
      </div>

      {showMoreDetails && (
        <div>
                 <label htmlFor="priority">Priority:</label>
          <select id="priority" name="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <label htmlFor="status">Status:</label>
          <select id="status" name="status">
            <option value="notStarted">Not Started</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      )}

      <button type="submit">Save</button>
    </form>
  );
};
export default Form;