import { Route, Routes, Navigate} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoundpage";
import Layout from "./components/Layout";
import Singlepage from "./pages/Singlepage";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import {Loginpage} from "./pages/Loginpage";

function App() {
  return (
    <div>
      <>
          <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='about' element={<Aboutpage/>} />
                <Route path='about-us' element={<Navigate to='/about' replace />} />
                <Route path='posts' element={<Blogpage/>} />
                <Route path='posts/:id' element={<Singlepage/>} />
                <Route path='posts/:id/edit' element={<Editpost/>} />
                <Route path='posts/new' element={<Createpost/>} />
                <Route path='login' element={<Loginpage/>} />
                <Route path='*' element={<Notfoundpage/>} />
            </Route>
          </Routes>
      </>
    </div>
  );
}

export default App;
