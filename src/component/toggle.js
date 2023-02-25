import { useState } from "react";
// import { ToggleButton } from "react-bootstrap";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";
import Grid from "./grid";
import ListComponent from "./list";

function Toggle() {
  const [displayMode, setDisplayMode] = useState("grid");

  const toggleDisplayMode = () => {
    setDisplayMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  return (
    <div>
      <div>
        <button onClick={toggleDisplayMode}>
          {displayMode === "grid" ? <faTh /> : <faList />}
        </button>
      </div>
      {displayMode === "grid" ? (
        <Grid />
      ) 
       : (
         <ListComponent />
       )
      }
    </div>
  );
}
export default Toggle;



// function ListContent() {
//   return (
//     <div>
//       {/* Code for list content goes here */}
//     </div>
//   );
// }
