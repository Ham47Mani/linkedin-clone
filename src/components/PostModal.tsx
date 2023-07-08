/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CreationPostIcon from "./CreationPostIcon";
//------ Import Icon from react-icon
import {
  FaBahai, FaBriefcase, FaIdBadge,
  FaImage, FaRegCalendarAlt, FaRegClock, FaVideo
} from "react-icons/fa"
import {BsBarChartLineFill, BsFillFileEarmarkTextFill, BsThreeDots, BsX} from "react-icons/bs";
import ReactPlayer from 'react-player';
import { articleType } from '../constants/types';
import { Timestamp } from 'firebase/firestore';
import { createPost, getPosts } from '../redux/articleActions';

type PostModalProps = {
  showPostModal: boolean,
  setShowPostModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PostModal = ({showPostModal, setShowPostModal}: PostModalProps) => {
  const {user} = useSelector((state:any) => state.user);
  const dispatch = useDispatch<any>();

  const inputImage = useRef<HTMLInputElement | null>(null);

  const [moreIcon, setMoreIcon] = useState<boolean>(true);// Show more icon to attached
  const [isDragOver, setIsDragOver] = useState<boolean>(false);// Show drop here box
  const [showVideoInput, setShowVideoInput] = useState<boolean>(false);// Show input video URL
  const [postText, setPostText] = useState<string>("");// Post Description or content
  const [postVideoLink, setPostVideoLink] = useState<string>("");// Post Video URL if exists
  const [postImageFile, setPostImageFile] = useState<Blob | null>(null);// Post Image Shared

  // Handle Drop File
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.includes("image/")) {
      alert(`Not an image, the file is ${typeof file}`);
      setIsDragOver(false);
      return;
    }
    setPostImageFile(e.dataTransfer.files[0]);
    setIsDragOver(false);
  }

  // Handle Drag Over 
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }

  // Handle Drag End
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }

  // Check post is empty or not
  const postEmpty = ():boolean => {
    if (postText != "" || postImageFile != null || postVideoLink != "") {
      return true;
    } else {
      return false;
    }
  }

  // Handle & Submit Post
  const handleSavePost = () => {
    if (!postEmpty()) {
      return;
    } else {
      const post: articleType = {
        actor: {
          userEmail: user.email,
          userName: user.displayName,
          userID: user.uid,
          userImg: user.photoURL,
          date: Timestamp.now(),
        },
        description: postText,
        shareImg: "",
        shareImgProgress: 0,
        video: postVideoLink,
        comment: 0
      };
      
      setPostText('');
      setPostText("");
      setPostVideoLink("");
      setPostImageFile(null)
      setMoreIcon(true);
      setShowVideoInput(false);
      closeModal();
  
      dispatch(createPost({article: post, sharedImg: postImageFile, dispatch}));
      dispatch(getPosts(dispatch));
    }
  };
  
  // Close Modale handler
  const closeModal = () => {
    setPostText("");
    setPostVideoLink("");
    setPostImageFile(null)
    setMoreIcon(true);
    setShowVideoInput(false);
    setShowPostModal(!showPostModal);
  }

  // handle OnChange in input file
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file: File | undefined = e.target.files?.[0];
    if (file === undefined) {
      alert(`Please Select a file`);
      return;
    }
    setPostImageFile(file);
  }

  return (
    <>
      {
        showPostModal &&
        <div className="fixed inset-0 z-[60] bg-black/80">
          <div className="container">
            <div className="w-full max-w-2xl bg-white h-[85vh] rounded-md relative flex flex-col top-8 m-auto animate-fadeIn">
              {/* ------------- Header Post Creation ------------- */}
              <div className="w-full px-4 py-5 leading-6 text-black/6 font-medium flex justify-between items-start border-b-2 border-black/15">
                {/* ------ User Info ------ */}
                <div className="flex items-start gap-4 select-none">
                  <div className="w-14 h-14">
                    {
                      user && user.photoURL ? (
                        <img src={user.photoURL} alt="profile pic" className="w-full h-full rounded-full object-cover"/>
                      ) : (
                        <img src="/imgs/avatar.jpg" alt="profile pic" className="w-full h-full rounded-full object-cover"/>
                      )
                    }
                  </div>
                  <div className="text">
                    <h2>{user && user.displayName ? user.displayName : "User name"}</h2>
                    <p className="text-black/70 text-sm font-normal w-1/2 lg:min-w-[300px]">
                      Post to Anyone
                    </p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full flex justify-center items-center transition-all hover:bg-black/10"
                  onClick={closeModal}
                >
                  <BsX className="text-2xl transition-all hover:-rotate-90"/>
                </button>
              </div>
              {/* ------------- Content Post Creation ------------- */}
              <div className="container flex-1 py-4 overflow-y-auto">
                <div className="w-full h-full relative flex flex-col"
                  onDrop={(e) => handleDrop(e)}
                  onDragEnd={(e) => handleDragEnd(e)}
                  onDragOver={(e) => handleDragOver(e)}
                >
                  {
                    isDragOver ? (
                      <div className="absolute inset-0 z-10 rounded-2xl bg-linkedIn-dark/20 border-dashed border-4 border-linkedIn text-xl flex flex-col justify-center items-center text-center text-black/70">
                        <span className="block text-4xl">+</span>
                        Drop your file here
                      </div>
                    ) : (
                      <>
                        <textarea value={postText} onChange={(e) => setPostText(e.target.value)}
                          placeholder="What do you want to talk about?" autoFocus
                          className="w-full  min-h-[90%] flex-1 resize-none md:text-xl focus:outline-none"
                        />
                        <div className="uploadImage">
                          <input type="file" name="image" id="ImageFile" onChange={(e) => handleChangeImage(e)}
                            accept='image/gif, image/jpeg, image/png' className='hidden' ref={inputImage}
                          />
                          { postImageFile && <img src={URL.createObjectURL(postImageFile as Blob)} alt={postImageFile?.name} /> }
                        </div>
                        <>
                          {
                            showVideoInput &&
                            <input type="text" placeholder='Entre your video link' value={postVideoLink} 
                              onChange={(e) => setPostVideoLink(e.target.value)}
                              className='border border-gray-300 w-[90%] py-2 px-3 my-3 rounded-md focus:border-linkedIn focus:outline-none'
                            />
                          }
                          {
                            postVideoLink && 
                            <div className="w-full min-h-[300px]">
                              <ReactPlayer width={'100%'} height={'100%'} url={postVideoLink}/>
                            </div>
                          }
                        </>
                      </>
                    )
                  }
                </div>
              </div>
              {/* ------------- Attached Post Creation ------------- */}
              <div className="container py-6 border-b-2 border-black/10 w-full flex justify-between md:justify-start items-center flex-wrap gap-4">
                {/* --- Image Icon --- */}
                <CreationPostIcon labelName="Add a photo">
                  <FaImage onClick={() => inputImage.current?.click()}/>
                </CreationPostIcon>
                {/* --- Video Icon --- */}
                <CreationPostIcon labelName="Add a video">
                  <FaVideo  onClick={() => setShowVideoInput(!showVideoInput)}/>
                </CreationPostIcon>
                {/* --- Calender Icon --- */}
                <CreationPostIcon labelName="Create an event">
                  <FaRegCalendarAlt />
                </CreationPostIcon>
                {
                  moreIcon ? (
                    /* --- More Icon --- */
                    <CreationPostIcon labelName="More">
                      <BsThreeDots onClick={() => setMoreIcon(!moreIcon)}/>
                    </CreationPostIcon>
                  ) : (
                    <>
                      {/* --- Celebrate Icon --- */}
                      <CreationPostIcon labelName="Celebrate an occasion">
                        <FaBahai />
                      </CreationPostIcon>
                      {/* --- Sac Icon --- */}
                      <CreationPostIcon labelName="Share that you're hiring">
                        <FaBriefcase />
                      </CreationPostIcon>
                      {/* --- Chart bar Icon --- */}
                      <CreationPostIcon labelName="Create a poll">
                        <BsBarChartLineFill />
                      </CreationPostIcon>
                      {/* --- Document Icon --- */}
                      <CreationPostIcon labelName="Add a document">
                        <BsFillFileEarmarkTextFill />
                      </CreationPostIcon>
                      {/* --- Badge Icon --- */}
                      <CreationPostIcon labelName="Find an expert">
                        <FaIdBadge />
                      </CreationPostIcon>
                    </>
                  )
                }
                
              </div>
              {/* ------------- Share Post Creation ------------- */}
              <div className="py-4 container flex justify-start items-center">
                <div className="ms-auto w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-200 cursor-pointer">
                  <FaRegClock className="text-gray-500 text-xl" />
                </div>
                <button onClick={handleSavePost}
                  className={`py-2 px-5 rounded-full ${!postEmpty() ? "bg-gray-300 text-gray-400 cursor-not-allowed" : "bg-linkedIn hover:bg-linkedIn-dark text-white font-medium"}`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default PostModal