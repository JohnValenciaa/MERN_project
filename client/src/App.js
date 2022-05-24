import './App.css';
import React from 'react';
import {Link,Routes,Route, Navigate} from "react-router-dom";
import Main from './components/Main';
import ViewOne from './components/View';
import Add from './components/Add';

function App() {
  return (
      <div className='Pirate_tab'>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/pirates/add">Add a Pirate!</Link>
      <hr />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/pirate/:id" element={<ViewOne/>}/>
          <Route path="/pirates/add" element={<Add/>}/>
        </Routes>
      </div>
  );
}
    
export default App;