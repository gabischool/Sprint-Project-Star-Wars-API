import React from 'react';
import './App.css';
import StarwarList from './components/StarwarList';
import { Route, Link, Switch, Router } from "react-router-dom";
import FlimCards from './components/FlimCards';
import FlimsList from './components/FlimsList';





const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <h3 className="span">
        <span><Link to="/">Home </Link></span>
        <span><Link to="/flims">flims </Link></span>

      </h3>
      <Switch>
        
      {/* 
      
      
      */}

     <Route path="/flims" >
     <ul className="header">
        
        <li>name</li>
        <li>rotation_period</li>
        <li>orbital_period</li>
        <li>diameter</li>
        <li>climate</li>
      </ul>
           <FlimsList/>
        </Route>

      <Route path="/" >
        
      <ul className="header">
        
        <li>name</li>
        <li>height</li>
        <li>mass</li>
        <li>hair color</li>
        <li>skin color</li>
      </ul>
     
     <StarwarList/>
        </Route>


         


      </Switch>




      
    
     
    </div>
  );
}

export default App;
