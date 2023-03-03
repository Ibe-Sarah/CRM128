import React from 'react';
import { faSort, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './new.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListComponent from './list';
import { useState } from 'react';
import Grid from './grid';
import Form from './newTask';

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
            <button onClick={handleAddProjectClick}>New Project</button>
            {showForm && (
        <div className="overlay" onClick={handleCloseForm}>
          <div className="form-popup" onClick={(e) => e.stopPropagation()}>
            {/* <button onClick={handleCloseForm}>Close</button> */}
            <Form />
          </div>
        </div>
      )}


            {/* <img onClick={handleListClick} className= 'sort' src={process.env.PUBLIC_URL + "/images/Vector.jpg"} alt="" ></img> */}
            <div style={{ display: isListVisible ? "block" : "none" }}>
            {isListVisible ? <ListComponent /> : <Grid />}

      </div>
            {/* <img className='frame' src= {process.env.PUBLIC_URL + "/images/Frame.jpg"} alt= 'frame'></img>  */}
            <FontAwesomeIcon icon="fa-sort" />
            {/* <button onClick={props.onClick}>
      {props.descending ? <faSortDown /> : <faSort />}
    </button> */}
            </div>
    )
}
export default New;