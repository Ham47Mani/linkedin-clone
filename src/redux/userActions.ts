import { createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { myUserType } from "../constants/types";
import { auth } from "../constants/firebase/config";

// ===================== Start Create User =====================
export const createUserWithEmail = createAsyncThunk(
  "user/createUserWithEmail",
  async (user:myUserType) => {
    try {
      const {email, password} = user;    
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      throw error;
    }
  }
)
// ===================== End Create User =====================

// ===================== Start Create User With Google =====================
export const createUserWithGoogle = createAsyncThunk(
  "user/createUserWithGoogle",
  async () => {
    const googleProvide = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, googleProvide);
      return res;
    } catch (error) {
      throw error;
    }
  }
)
// ===================== End Create User With Google =====================

// ===================== Start Login With Email =====================
export const loginWithEmail = createAsyncThunk(
  "user/loginWithEmail",
  async (user:myUserType) => {
    const {email, password} = user;
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      throw error;
    }
  }
)
// ===================== End Login With Email =====================

// ===================== Start signOut =====================
export const signOutAction = createAsyncThunk(
  "user/signOut",
  async () => {
    try {
      const res = await signOut(auth);
      return res;
    } catch (error) {
      throw error;
    }
  }
)
// ===================== End signOut =====================