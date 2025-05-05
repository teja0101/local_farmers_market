import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  "./assets/local-farmers-market.jpg";

/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Post from './components/Post';
import Profileuser from './components/profileuser';
import Cartuser from './components/cartuser';
import Cart from './components/Cart';
import Delivery from './components/delivery';
import Userdev from './components/userdev'
/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import UserHome from './components/UserHome';



/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Home></Home>
    },
    {
        path : '/username',
        element : <Username></Username>
    },
    {
        path : '/post',
        element : <Post></Post>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile></Profile></AuthorizeUser> 
    },
    {
        path : '/profileuser',
        element : <AuthorizeUser><Profileuser/></AuthorizeUser> 
    },
    {
        path : '/cartuser',
        element : <AuthorizeUser><Cartuser/></AuthorizeUser> 
    },
    {
        path : '/userdev',
        element : <AuthorizeUser><Userdev/></AuthorizeUser> 
    },
    {
        path : '/delivery',
        element :<AuthorizeUser> <Delivery/> </AuthorizeUser>
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
        path :'/userhome',
        element:<UserHome/>
    },
    {
        path :'/cart',
        element:<Cart/>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
  
])

export default function App() {
  return (
    <main>
        
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
