import React from 'react'
import Navbar from './assets/components/navbar/navbar.jsx'

import Footer from './assets/components/footer/footer.jsx'
import Home from './assets/pages/home/home.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './assets/pages/about-us/Aboutus.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/aboutus" element={<Aboutus />} />
    </Route>
  )
);;

const App = () => {
 
  return (
    <div>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
    </div>
  )
}

export default App

