import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "./Images/Logo.png";
import "./Styles/Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@mui/icons-material/Close';
import Header from './Header';

const Navbar = () => {
    const [data,setdata]=useState(false);
    const [menu,setmenu]=useState(false);

    const inputhandler = ()=>{
        setdata(!data);
    };

    const menuhandler = ()=>{
        setmenu(!menu);
    };

  return (
    <div>
        <Header />
        <div className='Navbar'>
            <div>
                <div className={menu?'MenuBar_Box':'MenuBar_Box_Not'}>
                    <Link to="/helpline" className='Menu_Link'>HelpLine</Link>
                    <Link to="/categories" className='Menu_Link'>Categories</Link>
                </div>
                <div className={menu?'MenuBar_arrow':'MenuBar_arrow_Not'}></div>
            </div>
            
            <div className='Menu_div'>
                <MenuIcon onClick={menuhandler} className="Icon" />
                <LocalMallIcon className="Icon" />
                <SearchIcon onClick={inputhandler} className="Icon"/>
            </div>
        <div className={data ? "SearchBar" : "SearchBar_Not" }>
            <input type="text" placeholder='Search Here'/>
            <SearchIcon  className='Search_Icon'/>
            <CloseIcon onClick={inputhandler}/>
        </div>
        <div className='Logo'>
            <img src={Logo} alt="Logo"/>
        </div>
        <div className='LinkBar'>
            <Link to="/" className='Link'>Home</Link>
            <Link to="/contact" className='Link'>Contact</Link>
            <Link to="/loginform" className='Link'>Loginform</Link>
            <Link to="/privacy" className='Link'>Privacy</Link>
            <Link to="/signup" className='Link'>Signup</Link>
        </div>
    </div>
        
    </div>
  )
}

export default Navbar