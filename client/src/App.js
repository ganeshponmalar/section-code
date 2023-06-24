
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Username from './Components/Username';
import Register from './Components/Register';
import Recovery from './Components/Recovery';
import Reset from './Components/Reset';
import PageNotFound from './Components/PageNotFound';
import Profile from './Components/Profile';
import Password from './Components/Password';
// import { AuthorizeUser, ProtectRoute } from './middleware/auth';

  const router = createBrowserRouter([

  {
      path : '/',
      element : <Username></Username>
  },

  {
      path : '/register',
      element : <Register></Register>
  },

  {
      path : '/password',
      element : <Password></Password>
  },

  {
      path : '/profile',
      element : <Profile></Profile>
  },
  
  {
      path : '/recovery',
      element : <Recovery></Recovery>
  },
  {
      path : '/reset',
      element : <Reset></Reset>
  },
  {
      path : '*',
      element : <PageNotFound></PageNotFound>
  },
])

export default function App(){
  return(
    <main>

      <RouterProvider router={router}></RouterProvider>

    </main>
  )
}