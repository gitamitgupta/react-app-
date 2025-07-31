import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   < RouterProvider  router={router}/>
  </StrictMode>,
)
