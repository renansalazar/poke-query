
export const getPokemones = async ({ pageParam = 0 }) => {
  const cant = 12
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pageParam*cant}&limit=${cant}`);
  const responseData = await response.json()
  const results = responseData.results;
  const count = responseData.count
  const totalPages = count/cant
  return { results, count, nextPage: pageParam + 1, totalPages };
}

export const getPokemon = async (name='pikachu') => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return await pokemon.json()
}
