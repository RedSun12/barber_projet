import './App.css';
import Root from './Root';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { setAccessToken } from './axiosInstance';
import SignupPage from './pages/SignupPage/SignupPage';
import SigninPage from './pages/SigninPage/SigninPage';
import HomePage from './pages/HomePage/HomePage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchRefresh } from './redux/thunkActions';
import { unwrapResult } from '@reduxjs/toolkit';
import TableLeaders from './components/TableLeaders/TableLeaders';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Contacts from './pages/Contacts/Contacts'
function App() {
  const user = useAppSelector((store) => store.userSlice.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRefresh())
      .then(unwrapResult)
      .then((result) => {
        setAccessToken(result.accessToken);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: user.username ? (
            <HomePage />
          ) : (
            <div className='homP'>
            <p className='tableZOV'>Если хочешь попасть в таблицу лидеров, зарегистрируйся</p>
            <p className='imgZOV'><img src='/stal.jpg'></img></p>
            <TableLeaders />
            </div>
          ),
        },

        {
          path: '/signin',
          element: <SigninPage />,
        },
        {
          path: '/signup',
          element: <SignupPage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
        {
          path: '/contact',
          element: <Contacts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
