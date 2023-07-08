/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { articleType } from "../constants/types";
import { db, store } from "../constants/firebase/config";
import { SetLoadingCreatePostStatus, SetLoadingPosts } from "./ArticleReducer";
import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { Dispatch, createAsyncThunk } from "@reduxjs/toolkit";

// ===================== Start Create Article =====================
export const createPost = createAsyncThunk(
  "articles/createArticle",
  async ({ article, sharedImg, dispatch }: {article: articleType,sharedImg: Blob | null, dispatch: Dispatch<any>}) => {    

    dispatch(SetLoadingCreatePostStatus(true));
    let imageURL = "";
    // ------------------ Start Upload Image & Get URL ------------------
    if (sharedImg !== null) {
      
      const imgName = `images_postss/${sharedImg?.name}_${Date.now()}`;// Create a unique file name for the image
      const storageRef = ref(store, imgName); // Create Reference for the image
      const uploadImg = uploadBytesResumable(storageRef, sharedImg);

      await uploadImg;// Wait for the upload to complete
      imageURL = await getDownloadURL(uploadImg.snapshot.ref);
      // ------------------ End Upload Image & Get URL ------------------
    }
    // Make all information of post with image shared URL
    const post: articleType = {
      actor: {
        userID: article.actor.userID,
        userName: article.actor.userName,
        userEmail: article.actor.userEmail,
        userImg: article.actor.userImg,
        date: article.actor.date
      },
      comment: article.comment,
      description: article.description,
      shareImgProgress: 100,
      shareImg: imageURL,
      video: article.video,
    }
    
    const postsCollection = collection(db, "posts");
    await addDoc(postsCollection, post);
    dispatch(SetLoadingCreatePostStatus(false));
    return post;
  });
// ===================== End Create Article =====================

// ===================== Start Get Posts =====================
export const getPosts = createAsyncThunk("articles/getPosts", async (dispatch: Dispatch<any>) => {
  dispatch(SetLoadingPosts(true));
  const postsQuery = query(collection(db, "posts"), orderBy("actor.date", "desc"));
  const postsDocs = await getDocs(postsQuery);
  dispatch(SetLoadingPosts(false));
  return postsDocs.docs.map(doc => doc.data())
});
// ===================== End Get Posts =====================