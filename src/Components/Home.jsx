import React from 'react';
import Keyboard from "./Images/Keyboard.jpg";
import "./Styles/Home.css";
import Cartform from './Cartform';

const Home = () => {
  return (
    <div className='Body_div'>
      <div className='Home_page'>
        <div className='container'>
          <div className='content'>
          <h1>Buy Computer Keyboards Online at Binger</h1>
          <p>Get a Quality Keyboard for Your Personal Computer Having the appropriate keyboard for your PC is extremely essential as it will increase your efficiency. This range of computer keyboards are designed for differently for various purposes like gaming, graphic designing, typing and more. Shop online from a wide range of computer keyboards and other PC accessories at the best prices online at Binger.</p>
          <div className='btn_div'>
            <button type='button' className='Keyboard_btn'>Shop Keyboards</button>
          </div>
          </div>
        </div>
        <img src={Keyboard} alt="Keyboard" />
      </div>
      <Cartform />
    </div>
  )
}

export default Home