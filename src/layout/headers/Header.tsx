/* eslint-disable react-hooks/rules-of-hooks */
import { FaSearch } from "react-icons/fa";
import NavItems from "./NavItems";
import { HomeNavItems } from "../../constants/datas";
import "./header.scss";
import Dropdown from "../../components/dropdown/Dropdown";
import { FaAngleDown } from "react-icons/fa";
import ButtonLg from "../../components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { signOutAction } from '../../redux/userActions';
import { useNavigate } from "react-router-dom";


// ===================================== Start Profile Dropdown Menu =====================================
// ---------- Toggler Dropdown
const profileIconDropdown = () => {
  const {user} = useSelector((state:any) => state.user);
  
  return (
    <>
      {
        user && user.photoURL ? (
          <img src={user.photoURL} alt="profile"  className="w-6 h-6 rounded-full object-cover"/>
        ) : (
          <img src="/imgs/avatar.jpg" alt="profile"  className="w-6 h-6 rounded-full object-cover"/>
        )
      }
      <div className="flex justify-between items-center">
        <span>Me</span>
        <FaAngleDown className="hidden md:block"/>
      </div>
    </>
  )
}

// ---------- Dropdown Header
const dropdownHeader = () => (
  <>
    <div className="min-w-[250px] py-4 text-start border-b-2 border-black/2">
      <div className="flex justify-between items-start">
        <div className="image w-16 h-16 min-w-fit me-4">
          <img src="/imgs/avatar.jpg" alt="profile"  className="w-full h-full rounded-full object-cover"/>
        </div>
        <div className="info">
          <h3 className="font-semibold tracking-wide">User Name</h3>
          <p className="text-black/70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quam?</p>
        </div>
      </div>
      <ButtonLg clickHadnler={() => null} 
        className="w-full border border-linkedIn-secondary text-linkedIn py-1 mt-2 min-h-fit hover:bg-linkedIn/5"
      >
        View Profile
      </ButtonLg>
    </div>
  </>
)

// ---------- Dropdown Content
const dropdownContent = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  return (
    <>
      <div className="text-start py-2 text-black/50 cursor-pointer transition-all duration-500 
        hover:text-black/80 hover:font-semibold"
      >
        <h5 className="" onClick={() => {
          dispatch(signOutAction());
          return navigate("/loginn");
          
        }}>Sign Out</h5>
      </div>
    </>
  )
};
// ===================================== End Profile Dropdown Menu =====================================

const Header = () => {  
  return (
    <header className="bg-white fixed top-0 min-h-[60px] shadow-sm w-full py-2 md:py-0 z-50">
      <div className="container flex justify-between items-center md:gap-8">
        {/* ------- Logo & Search Input ------- */}
        <div className="flex justify-between items-center md:pe-5 w-full md:max-w-[400px]">
          {/* --- Logo --- */}
          <div className="me-5">
            <img src="/imgs/linkedin.png" alt="logo" />
          </div>
          {/* --- Search Box --- */}
          <div className="relative min-h-[40px] flex-1">
            <FaSearch className="absolute z-10 h-full top-1/2 -translate-y-1/2 left-4 w-5 text-black/50"/>
            <input type="text" name="search" placeholder="Search" 
              className="absolute inset-0 ps-14 rounded-lg w-full md:w-[80%] transition-all duration-500 bg-linkedIn/10
              focus:w-full focus:text-lg" 
            />
          </div>
        </div>
        {/* ------- Navbar ------- */}
        <nav className="homeNav fixed left-0 bottom-0 w-full bg-white min-h-[60px] shadow-inner text-center
          md:static md:flex-1 md:min-h-fit md:shadow-none"
        >
          <div className="container flex justify-between items-center">
            {/* --- Nav Items --- */}
            <div className="navItem flex justify-center items-center md:justify-end flex-1 xl:border-e-2 border-black/10">
              <NavItems navItems={HomeNavItems} 
                classname="flex justify-between items-center gap-4"
              />
              <div className="profile-dropdown mx-4 py-2">
                <Dropdown dropdowntoggler={profileIconDropdown()} 
                  dropdownHeader={dropdownHeader()} dropdownContent={dropdownContent()} />
              </div>
            </div>
            {/* --- Work Dropdown & Link to Premium --- */}
            <div className="hidden xl:flex px-5">
              <div className="flex flex-col justify-center items-center flex-1 text-black/50">
                <img src="/imgs/dotsIcon.svg" alt="profile"  className="w-6 h-6 rounded-full object-cover"/>
                <div className="flex justify-between items-center">
                  <span>For Business</span>
                  <FaAngleDown className="hidden md:block"/>
                </div>
              </div>
                <a href="#" className="text-accent flex-1 underline">Try Premium for free</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header