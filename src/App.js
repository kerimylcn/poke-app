import axios from 'axios';
import React,{ useState,useEffect} from "react";
import PokeList from './PokeList';
import './App.css';
function App() {

  const [pokes,setPokes] = useState([]);

 console.warn(pokes)
  const search = ()=> {
        const data =axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
       .then((res)=>{
         const data = res;
          
         

          const createPokemonObject = (result) =>{
            result.forEach(async (pokemon)=>{
              const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              const data = await res.json()
  
               setPokes(currentList => [...currentList,data])
            })
          }
          
          
          createPokemonObject(data.data.results)
       })
       
       
  }
  

  useEffect(()=>{
       
       search();
  },[])

 
 
  return (
    <div className="app-container">
        <PokeList pokes={pokes} />
    </div>
)
    
    
 }
  


export default App;
