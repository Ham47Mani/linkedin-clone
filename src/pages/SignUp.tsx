import { useDispatch, useSelector } from "react-redux";
import { InputMoveLabel } from "../components/Inputs";
import ButtonLg from "../components/buttons";
import SignHeader from "../layout/headers/SignHeader";
import { useCallback, useState } from 'react';
import { userType } from "../constants/types";
import { createUserWithEmail, createUserWithGoogle } from "../redux/userActions";
import { Navigate } from "react-router-dom";

document.title = "Sign Up | LinkedIn";

const SignUp = () => {
  const {isLoggin} = useSelector((state: any) => state.user);
  const dispatch = useDispatch<any>();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const signUp = useCallback(() => {
    const user:userType = {
      email: userEmail, 
      password: userPassword
    };
    dispatch(createUserWithEmail(user));
  },[userEmail, userPassword]);
  
  return (
    <>
      {
        isLoggin == null || isLoggin == false ?
        <div className="min-h-screen">
          <SignHeader />
          <div className="container mt-8 text-center">
            <h1 className="text-base sm:text-2xl md:text-3xl tracking-wide">Make the most of your professional life</h1>
            <form action="" onSubmit={e => e.preventDefault()} className="md:w-3/4 lg:w-1/2 mx-auto p-6 rounded-lg">
              <InputMoveLabel inputType="email" name="email" labelContent="Email" 
                state={userEmail} setState={setUserEmail}
              />
              <InputMoveLabel inputType="password" name="password" labelContent="Password"
                state={userPassword} setState={setUserPassword}
              />
              <p className="text-xs md:text-sm">
                By clicking Agree & Join, you agree to the LinkedIn 
                <a href="#" className="text-linkedIn font-semibold"> User Agreement</a>, 
                <a href="#" className="text-linkedIn font-semibold"> Privacy Policy</a>, and 
                <a href="#" className="text-linkedIn font-semibold"> Cookie Policy</a>.
              </p>
              <ButtonLg className="signin-btn" clickHadnler={signUp}>Agree & Join</ButtonLg>
              <div className="divide">
                <hr/>
                <span>or</span>
              </div>
              <ButtonLg className="google-signin-btn" clickHadnler={() => dispatch(createUserWithGoogle())}>
                <div className="flex justify-center items-start">
                  <img className="w-5 h-5 rounded-full me-4 mt-1/2" src="/imgs/googleIcon.svg" alt="Google" />
                  <span>Sign in with Google</span>
                </div>
              </ButtonLg>
              <div className="mt-4 text-sm">
                Already on LinkedIn? 
                <a href="/" className="ms-2 font-semibold text-linkedIn-secondary">Sign in</a>
              </div>
              <div className="mt-6 text-sm">
                Looking to create a page for a business? 
                <a href="#" className="ms-2 font-semibold text-linkedIn-secondary">Get help</a>
              </div>
            </form>
          </div>
        </div> :
        <Navigate to="/"/>
      }
    </>    
  )
}

export default SignUp