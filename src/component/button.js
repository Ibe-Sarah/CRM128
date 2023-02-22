import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './button.css'


function Button () {
    return(
        <div className="circle-dots">
        <FontAwesomeIcon icon={faEllipsisV} />
</div>
    )
}
export default Button;