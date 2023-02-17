import {Link, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <div>
      <>
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
