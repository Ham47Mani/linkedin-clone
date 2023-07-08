import { Outlet } from "react-router-dom";
import Header from "./headers/Header";
import InfoAsid from "../components/InfoAsid";
import ReccomendAsid from "../components/ReccomendAsid";

document.title = "LinkedIn";


const HomeLayout = () => {
  
  return (
    <>
      <Header />
      <div className="container flex flex-col md:flex-row gap-5 justify-between items-start pt-24">
        <InfoAsid />
        <div className="flex-1 w-full pb-20">
          <Outlet />
        </div>
        <ReccomendAsid />
      </div>
    </>
  )
}

export default HomeLayout