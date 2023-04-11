import { Button } from 'bootstrap';
import React from 'react';
import {AiOutlineCloudUpload} from "react-icons/ai";
import './addmedia.css'

function Addmedia() {
    return(
<div className='addmedia'>
<p>Add Media</p>
<div className='cloud'>
    <AiOutlineCloudUpload style={{marginLeft: '10em'}}/>
    <p className='flies'>Browse and choose the files you want to upload from your computer</p>
</div>
<button className='cancel'>CANCEL</button>
<button className='savedocument'>SAVE DOCUMENT</button>
</div>
   
   );
}; export default Addmedia;