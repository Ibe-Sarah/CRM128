import React from 'react';
import { faSort, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './new.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListComponent from './list';
import { useState } from 'react';
import Grid from './grid';
import Form from './newTask';
import NewtaskForm from './NewtaskForm';

function New (props) {
    const [isListVisible, setIsListVisible] = useState(false);

    const handleListClick = () => {
      setIsListVisible(!isListVisible);
      
    };

    const [showForm, setShowForm] = useState(false);

    const handleAddProjectClick = () => {
      setShowForm(true);
    };
    const handleCloseForm = () => {
      setShowForm(false);
    };
  
    
  
    
    return (
        <div className= 'sub'>
            <button style={{marginBottom:'-2.3em'}} className='first-btn'onClick={handleAddProjectClick}>New Project</button>
            {showForm && (
        <div className="overlay" onClick={handleCloseForm}>
          <div className="form-popup" onClick={(e) => e.stopPropagation()}>
            {/* <button onClick={handleCloseForm}>Close</button> */}
            <NewtaskForm />
            {/* NewtaskForm has the cotent of 'Add New Project' while Form has the content of 'Add New Task' */}
          </div>
        </div>
      )}


            </div>
    )
}
export default New;