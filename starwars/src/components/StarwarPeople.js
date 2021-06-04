import React from 'react'

function StarwarCards(props) {

  
    return (
        <div className="container">
        
          <div className="ul">
            <ul>
             <li> {props.person.name} </li>
             </ul>
             </div>

             

             <div className="ul">
               <ul>
             <li> {props.person.height} </li>
             </ul>
             </div>
             

             <div className="ul">
               <ul>
             <li> {props.person.mass} </li>
             </ul>
             </div>
             

             <div className="ul">
               <ul>
             <li> {props.person.hair_color} </li>
             </ul>
             </div>
             

             <div className="ul">
                 <ul>
             <li>{props.person.skin_color} </li>
             </ul>
             </div>

           
             
          
        </div>
    )
}

export default StarwarCards;
