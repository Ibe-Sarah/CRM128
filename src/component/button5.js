import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './button.css'
import { useState } from "react";
import Option from "./options";
import ProOption from "./prooptions";
function Button5 () {
    const [showOptions, setShowOptions] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(true);
  };
  const handleCloseForm = () => {
    setShowOptions(false);
  };

    return(
        <div className="circle-dots">
        <FontAwesomeIcon icon={faEllipsisV} onClick={handleOptionsClick} />

        {showOptions && (
        <div className="overlay5" onClick={handleCloseForm}>
          <div className="form-popup5" onClick={(e) => e.stopPropagation()}>
            {/* <button onClick={handleCloseForm}>Close</button> */}
            <ProOption />
          </div>
        </div>
      )}
</div>
    )
}
export default Button5;