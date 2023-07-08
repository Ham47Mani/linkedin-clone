import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithGoogle, loginWithEmail } from "../redux/userActions";
import { InputStaticLabel } from "./Inputs";
import { userType } from "../constants/types";
import ButtonLg from "./buttons";
import "./login-form.scss";

const LoginForm = () => {
  const dispatch = useDispatch<any>();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const signIn = useCallback(() => {
    const user = {
      email: userEmail, 
      password: userPassword
    };    
    dispatch(loginWithEmail(user));
  }, [userEmail, userPassword]);

  return (
    <form action="" onSubmit={e => e.preventDefault()}>
      <InputStaticLabel name="email" inputType="text" labelContent="Email or phone" state={userEmail} setState={setUserEmail}/>
      <InputStaticLabel name="password" inputType="password" labelContent="Password" state={userPassword} setState={setUserPassword}/>
      <a href="#">Forgot password?</a>
      <ButtonLg className="signin-btn" clickHadnler={signIn}>Sign in</ButtonLg>
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
      <ButtonLg className="signout-btn" clickHadnler={() => null}>
        <a href="/signup">New to LinkedIn? Join now</a>
      </ButtonLg>
    </form>
  )
}

export default LoginForm