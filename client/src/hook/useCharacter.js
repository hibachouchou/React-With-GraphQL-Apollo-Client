import React from 'react'
import { useQuery, gql } from '@apollo/client';

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

const useCharacter = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS_LIST);
  return {
    error,
    loading,
    data
  }
}

export default useCharacter

