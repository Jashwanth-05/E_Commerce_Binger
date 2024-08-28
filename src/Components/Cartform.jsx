import React from 'react'
import CartNavBar from './CartComponents/CartNavBar';
import Ecom from './CartComponents/Ecom';
import Shopcart from './CartComponents/Shopcart';
import { useState } from 'react';
import Cart from './CartComponents/Cart';
import "./Styles/cartform.css";

const Cartform = () => {
    const [show,Setshow]=useState(false);
    const [cart,setCart]=useState([]);
    const [warning,setWarning]=useState(false);

    const handleclick=(item)=>{
        let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) ispresent = true;
    });
    if (ispresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart,item]);
    };

    const handlechange=(item,d)=>{
        let ind=-1;
        cart.forEach((data,index)=>{
            if(data.id === item.id) ind = index;
        });
        const arr=cart;
        arr[ind].amount+=d;
        if(arr[ind].amount===0) arr[ind].amount=1;
        setCart([...arr]);
    }
  return (
    <div>
        <CartNavBar Setshow={Setshow} size={cart.length} />
        {show?<Ecom handleclick={handleclick}/>:<Cart cart={cart} setCart={setCart} handlechange={handlechange} />}
        {warning && (<div className='Warning'>Item is already in your cart </div>)}
    </div>
  )
}

export default Cartform