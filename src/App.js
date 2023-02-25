import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import Grid from './component/grid';
import New from './component/new';
import Toggle from './component/toggle';

function App() {
  return( 
<div>
  <Header/>
  <New/> 
  <Grid/>
  <Sidebar/>
  
</div>

);
}

export default App;
