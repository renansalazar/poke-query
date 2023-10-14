import { useTransition } from '../hooks/useTransition';
import { usePokemones } from '../hooks/usePokemon'
import { Pokemon } from './Pokemon'
import { Link } from "react-router-dom";

export const Lista = () => {
  const transition = useTransition()
  const { isLoading, error, data, fetchNextPage } = usePokemones('pokemones')
  if (isLoading) {
    return <div id="loading">Loading...</div>
  }

  if (error) {
    return <div>Error Error...</div>
  }

  const handleLoadMore = () => {
    fetchNextPage()
  }

  return <div className='flex flex-col gap-6'>
    <ul className="grid grid-cols-3 gap-12">
      {
        data.pages.map(p=>{
          return p.results.map(poke=>{
            const routeToGo = "/detalle/" + poke.name
            return (
              <li key={"key-" + poke.name}>
                <Link to={routeToGo} onClick={(e) => {
                  e.preventDefault()
                  transition.navigateTo(routeToGo)
                }}>
                  <Pokemon data={poke} />
                </Link>
              </li>
            )
          })
        })
      }
    </ul>
    <div>
      <button className="mb-2 block w-full rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" onClick={handleLoadMore}>Cargar más...</button>
    </div>
  </div>
}
