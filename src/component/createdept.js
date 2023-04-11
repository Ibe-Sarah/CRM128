import React from 'react';
import { faSort, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './new.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListComponent from './list';
import { useState } from 'react';
import Grid from './grid';
import Form from './newTask';
import NewDepartment from './newDepartment';
function CreateDept (props) {
    const [isListVisible, setIsListVisible] = useState(false);

    const handleListClick = () => {
      setIsListVisible(!isListVisible);
      
    };

    const [showForm, setShowForm] = useState(false);

    const handleAddDepartmentClick = () => {
      setShowForm(true);
    };
    const handleCloseForm = () => {
      setShowForm(false);
    };
  
    
  
    
    return (
        <div className= 'sub'>
       <button className='btt' onClick={handleAddDepartmentClick}><span className='spa'>New Department</span></button>
            {showForm && (
        <div className="overlay" onClick={handleCloseForm}>
          <div className="form-popup" onClick={(e) => e.stopPropagation()}>
            {/* <button onClick={handleCloseForm}>Close</button> */}
            <NewDepartment />
          </div>
        </div>
      )}

</div>

    )
}
export default CreateDept;