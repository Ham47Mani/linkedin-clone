import ButtonLg from "./buttons";
import {FaPlus} from "react-icons/fa"

type boxFollowProps = {
  className?: string,
  imgSrc?: string,
  userName?: string,
  userInfo?: string,
  userLink?: string
}

const BoxFollow = ({className, imgSrc, userName, userInfo, userLink}: boxFollowProps) => {
  return (
    <div className={`flex items-start my-4 ${className}`}>
      <div className="me-5 w-16 h-16 rounded-full overflow-hidden">
        <img src={imgSrc ? imgSrc : "/imgs/avatar.jpg"} alt="user Pic" className=""/>
      </div>
      <div className="info">
        <h4 className="font-semibold text-black/70">
          {userName ? userName : "user account"}
        </h4>
        <p className="text-sm text-black/50">
          {userInfo ? userInfo :  "Lorem ipsum dolor sit amet consectetur."}
        </p>
        <a href={userLink ? userLink : ""} 
          className="flex justify-center items-center gap-2 border border-black/20 py-1 px-6 mt-4 w-fit rounded-3xl text-black/60 font-semibold"
        >
          <FaPlus/>
          Follow
        </a>
      </div>
    </div>
  )
}

export default BoxFollow