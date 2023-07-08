import ButtonLg from '../../components/buttons';
import { loginNavItems } from '../../constants/datas';
import NavItems from './NavItems';

const SignInHeader = () => {
  return (
    <header>
      <div className="container flex items-center justify-between h-16">
        {/* -------- Logo -------- */}
        <div className="login w-28 md:w-36 me-8">
          <svg className="text-linkedIn-secondary lazy-loaded" xmlns="http://www.w3.org/2000/svg" aria-busy="false" preserveAspectRatio="xMinYMin meet" viewBox="0 0 84 21"><g fill="none" fillRule="evenodd" className="inbug"><path d="M82.479 0H64.583C63.727 0 63 .677 63 1.511v17.977c0 .835.477 1.512 1.333 1.512h17.896c.857 0 1.771-.677 1.771-1.512V1.511C84 .677 83.336 0 82.479 0" className="bug-text-color"/><path fill="currentColor" d="M82.479 0H64.583C63.727 0 63 .677 63 1.511v17.977c0 .835.477 1.512 1.333 1.512h17.896c.857 0 1.771-.677 1.771-1.512V1.511C84 .677 83.336 0 82.479 0ZM71 8h2.827v1.441h.031c.431-.777 1.704-1.566 3.278-1.566C80.157 7.875 81 9.479 81 12.45V18h-3v-5.003c0-1.33-.531-2.497-1.773-2.497-1.508 0-2.227 1.021-2.227 2.697V18h-3V8Zm-5 10h3V8h-3v10Zm3.375-13.5a1.874 1.874 0 1 1-3.749.001 1.874 1.874 0 0 1 3.749-.001Z" className="background"/></g><g fill="currentColor" className="linkedin-text"><path d="M60 18h-2.8v-1.191h-.03c-.623.722-1.705 1.316-3.539 1.316-2.5 0-4.653-1.881-4.653-5.114 0-3.08 2.122-5.136 4.747-5.136 1.625 0 2.634.578 3.245 1.316H57V3h3v15Zm-5.521-7.875c-1.715 0-2.679 1.223-2.679 2.849 0 1.627.964 2.901 2.679 2.901 1.717 0 2.721-1.241 2.721-2.901 0-1.706-1.004-2.849-2.721-2.849ZM47.661 16.389c-.708.917-2.166 1.736-4.52 1.736-3.14 0-5.14-2.08-5.14-5.347 0-2.903 1.811-4.903 5.228-4.903C46.18 7.875 48 9.813 48 13.222c0 .34-.055.678-.055.678h-7.114l.017.309c.197.862.848 1.916 2.342 1.916 1.304 0 2.198-.701 2.602-1.25l1.87 1.514Zm-2.548-4.39c.02-1.054-.754-2.124-1.974-2.124-1.452 0-2.227 1.134-2.308 2.125h4.282Z"/><path d="M38 8h-3.5L31 12V3h-3v15h3v-5l3.699 5h3.542L34 12.533zM16 8h2.827v1.441h.031c.431-.777 1.704-1.566 3.278-1.566C25.157 7.875 26 9.792 26 12.45V18h-3v-5.003c0-1.472-.531-2.497-1.773-2.497-1.508 0-2.227 1.194-2.227 2.697V18h-3V8ZM11 18h3V8h-3v10Zm1.501-11.7a1.8 1.8 0 1 0 0-3.599 1.8 1.8 0 0 0 0 3.599ZM3 3H0v15h9v-3H3z"/></g></svg>
        </div>
        <nav className="flex justify-between items-center lg:divide-x-2 lg:divide-black/20 ">
          {/* -------- Nav Items -------- */}
          <NavItems navItems={loginNavItems} classname='hidden lg:flex justify-between items-center flex-1 px-10 gap-10 mt-2'/>

          {/* -------- SignIn | SignUp -------- */}
          <div className="flex justify-between items-center gap-2">
            <ButtonLg className="text-black/70 hover:text-black hover:bg-gray-200/50 ms-2" clickHadnler={() => null}>
              <a href="/signup">Join now</a>
            </ButtonLg>
            <ButtonLg className="border border-3 border-linkedIn text-linkedIn hover:bg-linkedIn-secondary/10 hover:text-linkedIn-dark"
              clickHadnler={() => null}
            >
              <a href="/">Sign in</a>
            </ButtonLg>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default SignInHeader;