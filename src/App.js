import {Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Homepage} from "./pages/Homepage";
import {Aboutpage} from "./pages/Aboutpage";
import {blogLoader, Blogpage} from "./pages/Blogpage";
import {postLoader, Singlepage} from "./pages/Singlepage";
import {Editpost} from "./pages/Editpost";
import {RequireAuth} from "./hoc/RequireAuth";
import {Createpost} from "./pages/Createpost";
import {Loginpage} from "./pages/Loginpage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {AuthProvider} from "./hoc/AuthProvider";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='about' element={<Aboutpage/>}>
            <Route path='contacts' element={<p>Our contact</p>} />
            <Route path='team' element={<p>Our team</p>} />
        </Route>
        <Route path='about-us' element={<Navigate to='/about' replace />} />
        <Route path='posts' element={<Blogpage/>} loader={blogLoader} />
        <Route path='posts/:id' element={<Singlepage/>} loader={postLoader}/>
        <Route path='posts/:id/edit' element={<Editpost/>} />
        <Route path='posts/new' element={
            <RequireAuth>
                <Createpost/>
            </RequireAuth>
        } />
        <Route path='login' element={<Loginpage/>} />
        <Route path='*' element={<Notfoundpage/>} />
    </Route>
))

function App() {
  return (
    <div>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
