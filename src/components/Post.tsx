/* eslint-disable no-empty-pattern */
import { postReactions } from "../constants/datas";
import Box from "./Box";
import { articleType } from "../constants/types";
import ReactPlayer from "react-player";

type postProps = {
  post: articleType
}

const Post = ({post}: postProps) => { 
  
  return (
    <Box className="py-2 px-3 my-8 shadow-md">
      {/* ---------- Post Header ---------- */}
      <div className="flex justify-between items-start mb-5">
        {/* ---- User Info---- */}
        <div className="flex-1 flex items-start">
          {/* --- Image --- */}
          <div className="w-16 h-16 rounded-full overflow-hidden me-4 my-2">
            {
              post && post.actor.userImg ? (
                <img src={post.actor.userImg} alt="user Pic" className="w-full h-full"/>
              ) : (
                <img src="/imgs/avatar.jpg" alt="user Pic" className="w-full h-full"/>
              )
            }
          </div>
          {/* --- Info --- */}
          <div className="py-2">
            <h4 className="font-semibold text-black/80">
              {post && post.actor.userName ? post.actor.userName : "Name profile"}
              <span className="font-bold text-xl -mt-3">.</span>
              <span className="text-sm ms-3 text-black/40">1st</span>
            </h4>
            <p className="text-sm text-black/50">
              {post && post.actor.userEmail ? post.actor.userEmail : "Lorem ipsum dolor sit amet consectetur."}
            </p>
            <div className="text-sm text-black/50 flex items-center gap-1">
              <p>
                {
                  post && post.actor.date ?
                    `${post.actor.date.toDate().toDateString()} | ${post.actor.date.toDate().toLocaleTimeString()}`
                  : 
                    "17h"
                }
              </p>
              <span className="font-bold text-xl -mt-3">.</span>
              <img src="/imgs/world.svg" alt="world"/>
            </div>
          </div>
        </div>
        {/* ---- Icon Setting ---- */}
        <div className="w-8 p-1 rounded-full h-full flex justify-center items-center cursor-pointer hover:bg-black/10">
          <img src="/imgs/setting.svg" alt="setting icon" className="w-full h-full"/>
        </div>
      </div>
      {/* ---------- Post Content ---------- */}
      <div className="post-content">
        <div className="description">
          { post ? post.description : "description"}
          <div className="w-full h-full my-4 flex justify-center items-center flex-wrap">
            { post.shareImg != "" && 
              <div className="h-80 flex-1 w-1/2">
                <img src={post.shareImg} alt={post.actor.userName} />
              </div> 
            }
            { post.video != "" &&
              <div className="flex-1 h-80 w-1/2">
                <ReactPlayer url={post.video} width={'100%'} height={'100%'} />
              </div>
            }
          </div>
        </div>
      </div>
      {/* ---------- Post Likes ---------- */}
      <div className="flex justify-between items-center py-1 border-b-2 border-black/10">
        <div className="likes flex items-center">
          <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" />
          <img src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="heart" />
          <p className="ms-1 text-sm text-black/50">10</p>
        </div>
        <div className="flex items-center">
          <a href="" className="text-sm text-black/50">
            <span>{post.comment != 0 ? post.comment : "0"}</span> comments
          </a>
          <p className="text-2xl font-bold text-black/50 px-1 -mt-3">.</p>
          <a href="" className="text-sm text-black/50"><span>2</span> reposts</a>
        </div>
      </div>
      {/* ---------- Post Reaction ---------- */}
      <div className="post-comment py-2 flex justify-between items-center gap-4">
        {
          postReactions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i}
                className="flex-1 flex items-center justify-center gap-2  py-3 cursor-pointer font-semibold 
                text-black/50 hover:bg-black/10 select-none"
              >
                <Icon className={`lg:text-2xl ${(item.name === "Like")? "-scale-x-100 -mt-2" : ""}`} />
                <p>{item.name}</p>
              </div>
            )
          })
        }        
      </div>
      {/* ---------- Post Comments ---------- */}
      <div className="comments"></div>
    </Box>
  )
}

export default Post