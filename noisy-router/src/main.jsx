import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from './layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx';
import User from './component/User/User.jsx';
import Product from './component/Product/Product.jsx';
import Buy from "./component/Buy/Buy.jsx";
import LearnMore from "./component/LearnMore/LearnMore.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="buy" element={<Buy />} />
      <Route path="learn-more" element={<LearnMore />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product" element={<Product />} />
      <Route path="user/:userid" element={<User />} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
