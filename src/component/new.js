import React from 'react';
import { faSort, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './new.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function New (props) {
    return (
        <div className= 'sub'>
            <button>New Project</button>
            <img className='togg' src={process.env.PUBLIC_URL + "/images/toggle.jpg"}></img>


            <img className= 'sort' src={process.env.PUBLIC_URL + "/images/Vector.jpg"} alt="" ></img>
            <img className='frame' src= {process.env.PUBLIC_URL + "/images/Frame.jpg"} alt= 'frame'></img> 
            <FontAwesomeIcon icon="fa-sort" />
            {/* <button onClick={props.onClick}>
      {props.descending ? <faSortDown /> : <faSort />}
    </button> */}
            </div>
    )
}
export default New;