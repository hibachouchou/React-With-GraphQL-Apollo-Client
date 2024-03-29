import React from 'react'
import './characters.css'
import useCharacter from '../hook/useCharacters';
import { Link } from "react-router-dom";

export default function Characters ()  {
    const { loading, error, data } = useCharacter();

    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return <div className='CharactersList'>
        {
     data.characters.results.map(({ id, name, image }) => (
      <Link to={`/${id}`} key={id}>

        <img  alt="character" src={`${image}`} />
        <h3>{name}</h3>
      </Link>
    ))    
        }
    </div>
   


}