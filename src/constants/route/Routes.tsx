import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AuthRequire from "./AuthRequire";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";
import Feed from "../../pages/Feed";
import HomeLayout from "../../layout/HomeLayout";
import NotFound from "../../pages/NotFound";


// createBrowserRouter For Our Routes
const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<AuthRequire />}>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Feed />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route> 
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<SignUp />}/>
  </>
));

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routes