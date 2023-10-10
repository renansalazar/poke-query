export const Pokemon = ({ data }) => {
  const splitArray = data.url.split("/")
  const id = splitArray[splitArray.length-2]
  return (
    <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          width="128px"
          height="128px"
          className="mx-auto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={data.name}
        />
      </div>
      <div className="p-6">
        <h3 data-testid='itemPokemonName'>{data.name}</h3>
      </div>
  </div>
  )
}
