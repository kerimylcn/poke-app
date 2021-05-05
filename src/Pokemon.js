import React from 'react';
import './Pokemon.css';

export default function Pokemon( {id,image,name,type} ) {


    return (
       <div className="app-container">
           <div className="pokemon-container">
               <div className="all-container">
                   <div className="thumb-container">
                   <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
               </div>
                   </div>
               </div>
           </div>
       
        
    )
}
