import React from 'react';
import { faSort, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './new.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListComponent from './list';
import { useState } from 'react';
import Grid from './grid';
import Form from './newTask';
import NewDepartment from './newDepartment';
import NewtaskForm from './NewtaskForm';
function CreateTask (props) {
    const [isListVisible, setIsListVisible] = useState(false);

    const handleListClick = () => {
      setIsListVisible(!isListVisible);
      
    };

    const [showForm, setShowForm] = useState(false);

    const handleAddTaskClick = () => {
      setShowForm(true);
    };
    const handleCloseForm = () => {
      setShowForm(false);
    };
  
    
  
    
    return (
        <div className= 'sub'>
            <button className='bttnn' onClick={handleAddTaskClick}>New <span className='spanz'>Task</span></button>
            {showForm && (
        <div className="overlay" onClick={handleCloseForm}>
          <div className="form-popup" onClick={(e) => e.stopPropagation()}>
            {/* <button onClick={handleCloseForm}>Close</button> */}
            <Form />
          </div>
        </div>
      )}

</div>

    )
}
export default CreateTask;