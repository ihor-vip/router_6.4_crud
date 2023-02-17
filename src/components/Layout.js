import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
      <>
          <header>
              <Link to='/'>Home</Link>
              <Link to='/posts'>Blog</Link>
              <Link to='/about'>About</Link>
          </header>

          <Outlet/>

          <footer>2023</footer>
      </>
    );
}