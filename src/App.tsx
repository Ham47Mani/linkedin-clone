/* eslint-disable @typescript-eslint/no-explicit-any */
import Routes from './constants/route/Routes';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { isLogged } from './redux/userReducers';
import { auth } from './constants/firebase/config';

import './App.scss';
import { getPosts } from './redux/articleActions';

function App() {
  const dispatch = useDispatch<any>();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      dispatch(isLogged({
        user: user,
        isLoggin: true
      }));
      dispatch(getPosts(dispatch));
    } else {
      // User is signed out
      dispatch(isLogged({
        user: null,
        isLoggin: false
      }));
    }
  });

  return (
    <Routes />
  )
}

export default App;
