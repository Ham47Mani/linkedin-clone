/* eslint-disable @typescript-eslint/no-inferrable-types */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequire = () => {
  const {isLoggin} = useSelector((state: any) => state.user);
  
  if (isLoggin !== null && isLoggin === false) {
    return <Navigate to="/login"/>;
  } else if (isLoggin) {
    return <Outlet />
  }
}

export default AuthRequire