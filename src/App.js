import React from 'react'
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Loginform from "./Components/Loginform";
import Privacy from "./Components/Privacy";
import SignUp from "./Components/SignUp";
import HelpLine from './Components/HelpLine';
import Categories from './Components/Categories';
import "./Components/Styles/app.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import "./Components/Styles/app.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/privacy" element={<Privacy />}/>
          <Route path="/loginform" element={<Loginform />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/helpline" element={<HelpLine />}/>
          <Route path="/categories" element={<Categories />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App