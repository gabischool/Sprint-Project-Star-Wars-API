import React from 'react'


function FlimCards(props) {
    return (
        <div className="flim_container">
           <div className="ul">
                 <ul>
             <li>{props.proop.name} </li>
             </ul>
             </div>

             <div className="ul">
                 <ul>
             <li>{props.proop.rotation_period} </li>
             </ul>
             </div>


             <div className="ul">
                 <ul>
             <li>{props.proop.orbital_period} </li>
             </ul>
             </div>

             <div className="ul">
                 <ul>
             <li>{props.proop.diameter} </li>
             </ul>
             </div>


             <div className="ul">
                 <ul>
             <li>{props.proop.climate} </li>
             </ul>
             </div>


             


        </div>
    )
}

export default FlimCards;
