import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { getPokemon, getPokemones } from "../services/pokemones";


export function usePokemon (keyName='pokemon', name='pikachu') {
  return useQuery({
    queryKey: [keyName],
    queryFn: () => getPokemon(name),
    // gcTime: 0
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