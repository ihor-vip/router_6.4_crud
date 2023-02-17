import {NavLink, Outlet} from "react-router-dom";


const setActive = ({isActive}) => isActive ? 'active-link' : ''
export default function Layout() {
    return (
      <>
          <header>
              <NavLink to='/' className={setActive}>Home</NavLink>
              <NavLink to='/posts' className={setActive}>Blog</NavLink>
              <NavLink to='/about'className={setActive}>About</NavLink>
          </header>

          <main className='container'>
              <Outlet/>
          </main>

          <footer className='container'>&copy; ReactRouter</footer>
      </>
    );
}