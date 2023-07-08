import {useEffect} from "react";
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000)
  }, []);
  
  return (
    <div className="container flex flex-col items-center mt-8">
      <h1 className="flex text-3xl font-bold">This Page Not Found</h1>
      <p className="text-black/70">Will be redirect to home page in 10s</p>
    </div>
  )
}

export default NotFound