import React from 'react'
import { useQuery, gql } from '@apollo/client';
import './characters.css'

const GET_CHARACTERS_LIST = gql`
  query GetCharactersList {
    characters{
        results {
        id
        name
        image
    }
    } 
  }
`;

export default function Characters ()  {
    const { loading, error, data } = useQuery(GET_CHARACTERS_LIST);

    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return <div className='CharactersList'>
        {
     data.characters.results.map(({ id, name, image }) => (
      <div  key={id}>
        <img  alt="character" src={`${image}`} />
        <h3>{name}</h3>
      </div>
    ))    
        }
    </div>
   


}