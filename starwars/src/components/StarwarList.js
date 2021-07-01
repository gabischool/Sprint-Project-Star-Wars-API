import React,{useEffect, useState} from 'react';
import StarwarCards from './StarwarPeople';
import axios from "axios";





function StarwarList() {


    const [people, setPeople] = useState([]);

    useEffect( () =>{
    axios.get("http://swapi.dev/api/people/?format=json")
    .then( response =>{
    
        setPeople(response.data.results)
        // console.log(response.data.results)
    })
    .catch( Error =>{
        console.log(Error);
    })
    },[])


    return (
        <div>
        { people.map( function(element){
        return <StarwarCards person={element}/>
        })}

        



          
           
        </div>
    )
}

export default StarwarList;
