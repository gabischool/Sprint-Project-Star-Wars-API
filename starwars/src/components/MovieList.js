import React from "react";
import { useState, useEffect} from "react";
import MovieCard from "./MovieCard";

import axios from "axios";
import { Row } from "reactstrap";


export default function MovieList () {


    const [ movies, setMovies] = useState([])
    
 
      
   useEffect(() => {
     
       axios.get('https://swapi.dev/api/films/')
         .then((response) => {
         setMovies(response.data.results)
           
         })
         .catch((error) => {
           console.error('Server Error', error)
         })
     
        },[])
    
   

    return (

        <Row>
            

                {movies.map(function(movie) {
                    return <MovieCard film={movie} />

                           
              })}   
        

            
        </Row>

    )

    }