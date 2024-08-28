import React from 'react'
import list from "../data";
import Shopcart from './Shopcart';
import "../Styles/Ecom.css";
import { useState } from 'react';

const Ecom = ({handleclick}) => {
  return (
    <div className='cards1'>
        {list.map((list)=>(
            <Shopcart key={list.id} handleclick={handleclick} item={list} />
        ))}
    </div>
  )
}

export default Ecom