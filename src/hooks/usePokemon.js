import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { getPokemon, getPokemones } from "../services/pokemones";
import { useState } from 'react';
import { useEffect } from 'react';


export function usePokemon (keyName='pokemon', name='pikachu') {
  return useQuery({
    queryKey: [keyName],
    queryFn: () => getPokemon(name),
    staleTime: 1000*60
  })
}


export function usePokemones (keyName='pokemones') {
  return useInfiniteQuery({
    queryKey: [keyName],
    initialPageParam: 0,
    queryFn: getPokemones,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  })
}

export function usePokemonWithoutQuery (keyName, name ) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    getPokemon(name).then(result => {
      setData(result)
    })
    .catch(error => {
      setError(true)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])
    
  return {
    data,
    isLoading,
    error
  }
}


export function usePokemonesWithoutQuery (keyName='pokemones') {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    getPokemones({}).then(result => {
      setData({...result, pages: [{ results: result.results }]})
    })
    .catch(error => {
      setError(true)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])
    
  return {
    data,
    isLoading,
    error,
    fetchNextPage: () => { console.log('próximamente')}
  }
}