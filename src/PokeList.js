import React from 'react'
import Pokemon from './Pokemon';


export default function PokeList( { pokes } ) {


    return (
        <div className="app-container">
            
          {pokes.map((pokemon,index)=>{
              return <Pokemon 
              name={pokemon.name}
              key={index}
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              />
          })}
          
         </div>
    )
}
