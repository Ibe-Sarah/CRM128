import React from 'react';
import { faSort, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './new.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function New (props) {
    return (
        <div className= 'sub'>
            <button>New Project</button>
            <img className='togg' src= 'toggle.jpg' alt= 'frame'></img>
            <img className= 'sort' src="Vector.jpg" alt="" ></img>
            <img className='frame' src= 'Frame.jpg' alt= 'frame'></img> 
            <FontAwesomeIcon icon="fa-sort" />
            {/* <button onClick={props.onClick}>
      {props.descending ? <faSortDown /> : <faSort />}
    </button> */}
            </div>
    )
}
export default New;