import React, {useState} from "react";
import Button from "./button";
import './mechanical.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Option from "./options";
import CreateTask from "./createtask";
import Edit from "./edit";

function Mechanical() {
  
    const [showOptions, setShowOptions] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(true);
  };
  const handleCloseForm = () => {
    setShowOptions(false);
  };
    return (
  
  
      <div className="Mech">
       
            <CreateTask/>
            
        <table>
    <thead style={{width:'20em'}}>
      <tr>
        <th>Task</th>
        <th>Assigned To</th>
        <th>Start Date</th>
        <th>Due Date</th>
        <th>Status</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Installation Of A Mechanical...</td>
        <td>Ayodele Balogun</td>
        <td>24 Nov 2022</td>
        <td>30 Jun 2023</td>
        <td>In progress</td>
        <td >
        <FontAwesomeIcon style={{marginLeft:'2em'}} icon={faEllipsisV} onClick={handleOptionsClick}/>
        {showOptions && (
        <div className="overlayzzz" onClick={handleCloseForm}>
          <div className="form-popupzzz" onClick={(e) => e.stopPropagation()}>
            {/* <button onClick={handleCloseForm}>Close</button> */}
            <Option />
          </div>
</div>
        )}
            </td>
      </tr>
      <tr>
      <td>Installation Of A Mechanical...</td>
        <td>Ayodele Balogun</td>
        <td>24 Nov 2022</td>
        <td>30 Jun 2023</td>
        <td>In progress</td>
        <td >
        <FontAwesomeIcon style={{marginLeft:'2em'}} icon={faEllipsisV}/>
            </td>

        </tr>
        <tr>
        <td>Installation Of A Mechanical...</td>
        <td>Ayodele Balogun</td>
        <td>24 Nov 2022</td>
        <td>30 Jun 2023</td>
        <td>In progress</td>
        <td >
        <FontAwesomeIcon style={{marginLeft:'2em'}} icon={faEllipsisV}/>
            </td>

         </tr>
  
        <tr>
      <td>Installation Of A Mechanical...</td>
        <td>Ayodele Balogun</td>
        <td>24 Nov 2022</td>
        <td>30 Jun 2023</td>
        <td>In progress</td>
        <td >
        <FontAwesomeIcon style={{marginLeft:'2em'}} icon={faEllipsisV}/>
            </td>

        </tr>
  
        <tr>
        <td>Installation Of A Mechanical...</td>
        <td>Ayodele Balogun</td>
        <td>24 Nov 2022</td>
        <td>30 Jun 2023</td>
        <td>In progress</td>
        <td >
        <FontAwesomeIcon style={{marginLeft:'2em'}} icon={faEllipsisV}/>
            </td>
           </tr>
  
        <tr>
        <td>Installation Of A Mechanical...</td>
        <td>Ayodele Balogun</td>
        <td>24 Nov 2022</td>
        <td>30 Jun 2023</td>
        <td>In progress</td>
        <td >
        <FontAwesomeIcon style={{marginLeft:'2em'}} icon={faEllipsisV}/>
            </td>
        </tr>
  
        <tr>
        <td>Installation Of A Mechanical...</td>
        <td>Ayodele Balogun</td>
        <td>24 Nov 2022</td>
        <td>30 Jun 2023</td>
        <td>In progress</td>
        <td >
        <FontAwesomeIcon style={{marginLeft:'2em'}} icon={faEllipsisV}/>
            </td>

        </tr>
  
    </tbody>
  </table>
  
      </div>
    );
  }
  
  export default Mechanical;
  