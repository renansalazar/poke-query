import {
  Outlet,
  Link,
} from "react-router-dom";
import { useTransition } from '../hooks/useTransition';

export default function Layout() {
  const transition = useTransition()
  return (
    <>
      <header className="flex items-center pt-12 flex-column w-full justify-center">
        <Link to="/" onClick={(e) => {
                  e.preventDefault()
                  transition.navigateTo('/')
                }}>
          <h1 className="font-bold text-2xl">
            Pokedex
          </h1>
        </Link>
      </header>
      <div className='flex flex-col m-auto items-center justify-center p-24 pt-10 max-w-6xl gap-4'>
        <Outlet />
      </div>
    </>
  );
}