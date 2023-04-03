import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import PostDetails from './components/Post/PostDetails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <First></First>
      },
      {
        path:'/friends',
        element: <Friends></Friends>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users')
      },{
        path:'/friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/posts',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
