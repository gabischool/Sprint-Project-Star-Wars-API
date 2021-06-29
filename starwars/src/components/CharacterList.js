import React from "react";
import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";


export default function CharacterList() {

    const [ characters, setCharacter] = useState([])

      
      
   useEffect(() => {
    
      axios.get('https://swapi.dev/api/people/')
        .then(response => {
          setCharacter(response.data.results)
          console.log(response)
        })
        .catch(error => {
          console.error('Server Error', error);
        })

        
        },[])

    return (

    <div>
      
       
             {characters.map(function(character) {
                    return <CharacterCard person={character} />

                           
              })}   
     
    </div>



    )


}