import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import SignInHeader from "../layout/headers/SignInHeader";
import { Navigate } from "react-router-dom";

document.title = "LinkedIn: Log In or Sign Up";

const Login = () => {
  const {isLoggin} = useSelector((state: any) => state.user);
  

  return (
    <>
      {
        isLoggin == false ?
          <>
            <SignInHeader />
            <section className="pt-10">
              <div className="container flex justify-between items-start flex-col lg:flex-row">
                {/* ------- Content ------- */}
                <div className="content w-full lg:w-[55%] mb-14 lg:mt-0">
                  <h1 className="main-heading text-accent text-center md:text-start">Welcome to your professional community</h1>
                  {/* --- Form --- */}
                  <LoginForm />
                </div>
                {/* ------- Image ------- */}
                <div className="image w-full lg:w-[44%] h-80 lg:h-[560px] bg-[url('/imgs/home.svg')] bg-cover bg-no-repeat">
                </div>
              </div>
            </section>
          </> :
          <Navigate to="/"/>
      }
    </>
  )
}

export default Login;