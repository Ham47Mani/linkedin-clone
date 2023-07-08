import { createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";
import { myUserType } from "../constants/types";
import { auth } from "../constants/firebase/config";

// ===================== Start Create User =====================
export const createUserWithEmail = createAsyncThunk(
  "user/createUserWithEmail",
  async (user:myUserType) => {
    const {email, password} = user;    
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  }
)
// ===================== End Create User =====================

// ===================== Start Create User With Google =====================
export const createUserWithGoogle = createAsyncThunk(
  "user/createUserWithGoogle",
  async () => {
    const googleProvide = new GoogleAuthProvider();
    signInWithRedirect(auth, googleProvide);
  }
)
// ===================== End Create User With Google =====================

// ===================== Start Login With Email =====================
export const loginWithEmail = createAsyncThunk(
  "user/loginWithEmail",
  async (user:myUserType) => {
    const {email, password} = user;
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  }
)
// ===================== End Login With Email =====================

// ===================== Start signOut =====================
export const signOutAction = createAsyncThunk(
  "user/signOut",
  async () => {
    const res = await signOut(auth);
    return res;
  }
)
// ===================== End signOut =====================