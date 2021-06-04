import React,{useEffect, useState} from 'react';
import axios from "axios";
import FlimCards from './FlimCards';


function FlimsList() {


    const [flims, setFlims] = useState([]);

    useEffect( () =>{
    axios.get("http://swapi.dev/api/planets/?format=json")
    .then( response =>{
    
        setFlims(response.data.results)
        console.log(response.data.results)
    })
    .catch( Error =>{
        console.log(Error);
    })
    },[])
    
    return (
        <div>
        { flims.map( function(flim){
        return <FlimCards proop={flim}/>
        })}

 </div>
   )
}


export default FlimsList;
