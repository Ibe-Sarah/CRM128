import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import Grid from './component/grid';
import New from './component/new';
import Toggle from './component/toggle';
import Overlay from './component/overlay'
import ListComponent from './component/list';
import Form from './component/newTask';

function App() {
  return( 
<div>
  <Header/>
  <New/> 
  <Grid/>
  <Sidebar/>
  {/* <ListComponent/> */}
  {/* <Form/> */}
  {/* <Overlay/> */}
  
</div>

);
}

export default App;
