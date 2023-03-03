import { useState } from "react";
import './newTask.css'

const Form = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleMoreDetailsClick = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <form>
      
        <h4 className="Head">Create New Task </h4>
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

      <div className= 'more-details'onClick={handleMoreDetailsClick} style={{ cursor: "pointer" }}>
        More Details
      </div>

      {showMoreDetails && (
        <div className="form-section">
                 <label htmlFor="duration">Duration:
         <input type='date' id="duration" name="duration"/> </label>

                   <label htmlFor="freq">Frequency:
          <select id="freq" name="freq">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          </label>
          <label htmlFor="attachment">Attachment:
         <input type='text' id="attachment" name="attachment"/> </label>

         <label htmlFor="priority">Priority:
          <select id="priority" name="prority">
            <option value="daily">Small</option>
            <option selected value="weekly">Medium </option>
            <option value="monthly">Large</option>
            
          </select>
          </label>

        </div>
      )}

      <button id="save" type="submit">Save</button>
      
    </form>
  );
};
export default Form;