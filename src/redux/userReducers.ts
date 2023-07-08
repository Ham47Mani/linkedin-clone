/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmail, createUserWithGoogle, loginWithEmail, signOutAction } from "./userActions";
import { initialStateType } from '../constants/types';

//- Initilize the initial state
const initialState: initialStateType  = {
  user : null,
  isLoggin: null
};

//- Create Reducer
const userReducers = createSlice({
  initialState,
  name: "user",
  reducers: {
    isLogged: (state, action) => {      
      return {
        ...state,
        isLoggin: action.payload.isLoggin,
        user: action.payload.user
      }
    }
  },
  extraReducers(builder) {
      // ================== Create User With Email & Password ==================
      builder.addCase(createUserWithEmail.fulfilled, (state: initialStateType, action) => {
        return {
          ...state,
          user: action.payload.user,
          isLoggin: true
        }
      });
      builder.addCase(createUserWithEmail.rejected, (_state, error) => {
        alert(error.error.message);
      });
      // ================== Create User With Email & Password ==================

      // ================== Create User With Google ==================
      builder.addCase(createUserWithGoogle.fulfilled, (state: initialStateType, action) => {
        return {
          ...state,
          user: action.payload.user,
          isLoggin: true
        }
      });
      builder.addCase(createUserWithGoogle.rejected, (_state, error) => {
        alert(error.error.message);
      });
      // ================== Create User With Google ==================

      // ================== Start Login With Email & Password ==================
      builder.addCase(loginWithEmail.fulfilled, (state: initialStateType, action) => {
        return {
          ...state,
          user: action.payload.user,
          isLoggin: true
        }
      });
      builder.addCase(loginWithEmail.rejected, (_state, error) => {
        alert(error.error.message);
      });
      // ================== End Login With Email & Password ==================

      // ================== Start SignOut User ==================
      builder.addCase(signOutAction.fulfilled, (state, _action) => {
        return {
          ...state,
          user: null,
          isLoggin: false
        }
      });
      builder.addCase(signOutAction.rejected, (_state, error) => {
        alert(error.error.message);
      });
      // ================== End SignOut User ==================
  },
});

export const {isLogged} = userReducers.actions
export default userReducers.reducer;