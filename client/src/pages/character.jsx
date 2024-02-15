import React from 'react';
import './characters.css';
import useCharacter from '../hook/useCharacter';
import { useParams } from 'react-router-dom';

export default function Character() {
  const { id } = useParams();
  const { loading, error, data } = useCharacter(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.character) {
    return <div>Something went wrong...</div>;
  }

  const { character } = data;

  return (
    <div className='Character'>
      <img alt="character" src={character.image} width={500} height={500} />
      <div className='Character-content'>
        <h1>{character.name}</h1>
        <p>{character.gender}</p>
        <div className='Character-episode'>
          {character.episode.map(episode => (
            <div key={episode.id}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
