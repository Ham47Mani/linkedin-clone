/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux"
import Box from "../components/Box"
import Post from "../components/Post"
import { SharedButton } from "../components/buttons"
import { sharedIconsItems } from "../constants/datas"
import PostModal from "../components/PostModal"
import { useState } from 'react';
import { articleType } from "../constants/types"

document.title = "Feed | LinkedIn"

const Home = () => {
  const {user} = useSelector((state:any) => state.user);
  const [showPostModal, setShowPostModal] = useState<boolean>(false);
  const {loadingCreationPost} = useSelector((state:any) => state.articles);
  const {posts} = useSelector((state:any) => state.articles);
  
  return (
    <>
      <Box className="py-4 md:py-2 px-3 shadow-md">
        {/* --------- Image & Text Input --------- */}
        <div className="flex items-center gap-5">
          {
            user && user.photoURL ? (
              <img src={user.photoURL} alt="profile pic" className="w-9 h-9 md:w-16 md:h-16 rounded-full"/>
            ) : (
              <img src="/imgs/avatar.jpg" alt="profile pic" className="w-9 h-9 md:w-16 md:h-16 rounded-full"/>
            )
          }
          <button onClick={() => setShowPostModal(true)}
            className="flex-1 py-2 md:py-4 px-5 text-start border-2 rounded-full text-sm text-black/60 font-medium hover:bg-black/5"
          >
            Start a post
          </button>
        </div>
        {/* --------- Buttons --------- */}
        <div className="py-1 flex justify-start md:justify-between items-center flex-wrap">
          {
            sharedIconsItems.map((item, i) => (
              <div onClick={() => setShowPostModal(true)} key={i}>
                <SharedButton icon={item.icon} text={item.name} color={item.color}/>
              </div>
            ))
          }
        </div>
      </Box>
      {
        loadingCreationPost &&
        <div className="my-4 flex justify-center items-center">
          <img src="/imgs/spin-loading.gif" alt="spin loading" className="w-10 h-10" />
        </div>
      }
      {
        (posts.lenght != 0) ? (
          posts.map((post: articleType, i:number) => (
            <Post post={post} key={i}/>
          ))
        ) : (
          <h1 className="m-4 text-center text-xl text-gray-400">Theres no post found</h1>
        )
      }
      {/* <Post />
      <Post /> */}
      {/* ---------------- Post Modal ---------------- */}
      <PostModal showPostModal={showPostModal} setShowPostModal={setShowPostModal}/>
    </>
  )
}

export default Home