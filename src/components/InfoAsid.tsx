import Box from "./Box";
import {FaBookmark, FaUsers, FaConnectdevelop, FaHashtag} from "react-icons/fa";
import ColpsTabs from "./ColpsTabs";
import { useSelector } from "react-redux";

const InfoAsid = () => {
  const {user} = useSelector((state:any) => state.user);  

  return (
    <div className="w-full md:w-[20%] lg:sticky top-20 pb-10">
      {/* ----------------- User Info & Stats ----------------- */}
      <Box className="w-full">
        <div className="relative w-full h-24">
          <img src="/imgs/card-bg.jpg" alt="cover" className="absolute inset-0 w-full h-full" />
        </div>
        <div className="cursor-pointer relative px-2 text-center pb-4 border-b-black/10 border-b-2">
          {
            user && user.photoURL ? (
              <img src={user.photoURL} alt="profile pic" className="w-20 h-20 rounded-full p-1 bg-linkedIn-white -mt-10 z-20 mx-auto"/>
            ) : (
              <img src="/imgs/avatar.jpg" alt="profile pic" className="w-20 h-20 rounded-full p-1 bg-linkedIn-white -mt-10 z-20 mx-auto"/>
            )
          }
          <h3 className="my-4 font-semibold tracking-wide">
            Welcome, {user && user.displayName ? user.displayName : "There"}
          </h3>
          <p className="text-black/50 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor
          </p>
        </div>
        <div className="py-2 border-b-black/10 border-b-2 text-sm">
          <div className="flex justify-between px-3 py-1 cursor-pointer hover:bg-black/5">
            <p className="text-black/50">Who's view your profile</p>
            <p className="text-linkedIn-secondary font-semibold">9</p>
          </div>
          <div className="flex justify-between px-3 py-1 cursor-pointer hover:bg-black/5">
            <p className="text-black/50">Impressions of your post</p>
            <p className="text-linkedIn-secondary font-semibold">98</p>
          </div>
        </div>
        <div className="py-3 px-4 flex justify-start items-center font-semibold text-black/70 cursor-pointer hover:bg-black/5">
          <FaBookmark className="me-2"/>
          <p>My items</p>
        </div>
      </Box>

      {/* ----------------- Group & Hashtags ----------------- */}
      <Box className="hidden md:block pt-4 mt-4 font-medium text-sm">
        <ColpsTabs tabTitle="Recent" tabIsOpen={true}>
          <div className="flex items-center text-sm hover:bg-black/5 py-1 px-3">
            <FaUsers className="me-2 text-xl font-semibold" />
            <p>Group Name</p>
          </div>
        </ColpsTabs>
        <ColpsTabs tabTitle="Groups" tabIsOpen={true} className="text-linkedIn-secondary">
          <div className="flex items-center text-sm hover:bg-black/5 py-1 px-3">
            <FaUsers className="me-2 text-xl font-semibold" />
            <p>Group Name</p>
          </div>
          <div className="flex items-center text-sm hover:bg-black/5 py-1 px-3">
          <FaUsers className="me-2 text-xl font-semibold opacity-0" />
            <p>See All</p>
          </div>
        </ColpsTabs>
        <ColpsTabs tabTitle="Event" tabIsOpen={false} className="text-linkedIn-secondary">
          <div className="flex items-center text-sm hover:bg-black/5 py-1 px-3">
            <FaConnectdevelop className="me-2 text-xl font-semibold" />
            <p>Event Name</p>
          </div>
        </ColpsTabs>
        <ColpsTabs tabTitle="Followed Hashtags" tabIsOpen={false} className="text-linkedIn-secondary">
          <div className="flex items-center text-sm hover:bg-black/5 py-1 px-3">
            <FaHashtag className="me-2 text-xl font-semibold bg-black/10 rounded-full p-1" />
            <p>Event Name</p>
          </div>
          <div className="flex items-center text-sm hover:bg-black/5 py-1 px-3">
            <FaHashtag className="me-2 text-xl font-semibold bg-black/10 rounded-full p-1" />
            <p>Event Name</p>
          </div>
        </ColpsTabs>
        <div className="py-3 px-4 flex justify-center items-center font-semibold text-black/50 cursor-pointer hover:bg-black/5">
          <p>Discover more</p>
        </div>
      </Box>
    </div>
  )
}

export default InfoAsid;