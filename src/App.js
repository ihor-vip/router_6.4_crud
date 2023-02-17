import {Link, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <div>
      <>
        <header>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Blog</Link>
            <Link to='/about'>About</Link>
        </header>
          <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/about' element={<Aboutpage/>} />
              <Route path='/posts' element={<Blogpage/>} />
              <Route path='*' element={<Notfoundpage/>} />
          </Routes>
      </>
    </div>
  );
}

export default App;
