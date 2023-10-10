import { useState } from "react";

export const Buscador = ({ name='' }) => {
  const [namePokemon, setNamePokemon] = useState(name)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(namePokemon.trim()!==''){
      window.location.href = "/detalle/" + namePokemon.toLowerCase().trim().replace(" ", "-")
    }
  }

  return (<form onSubmit={handleSubmit} className='flex gap-4'>
    <input 
      data-testid="buscadorText" 
      type="search"
      className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      value={namePokemon} 
      placeholder="Inserte Nombre de Pokemon"
      onChange={(e)=>setNamePokemon(e.target.value)}
    />
    <button className="relative z-[2] flex items-center rounded-r bg-blue-900 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">Buscar</button>
  </form>)
}
