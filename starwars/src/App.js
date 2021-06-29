import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect } from 'react';
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import Home from './components/Home';

import {Switch, Route, Link} from "react-router-dom";
import { Container } from 'reactstrap';

export default function App () {




  return (

          

          <Container className="App">

        <h1 className="Header">React Wars</h1>
            
              <nav>
                <div className="nav-links">

                   <Link to="/">Home</Link>
                  <Link to="/character">Characters</Link>
                  <Link to="/films">Movies</Link>
                  

                  </div>

              </nav> 

                  <Switch>

                      <Route path="/character" component={CharacterList} />
                      
                      <Route path="/films" component={MovieList} />
                      <Route path="/" component={Home} />

                  </Switch>      
        </Container>

      
      );
    }


