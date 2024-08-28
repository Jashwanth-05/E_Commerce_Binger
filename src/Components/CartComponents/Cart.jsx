import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../Styles/Cart.css';

const Cart = ({cart,setCart,handlechange}) => {
    const [price, setprice] = useState(0);

    const handleremove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setprice(ans);
    };
    useEffect(() => {
      handlePrice();
    });

  return (
    <div>
        <div className='cart_container'> 
                {cart.map((cart)=>(
                    <div className='cart_box'>
                        <div className='cart_img'>
                            <img src={cart.img} alt="" />
                            <p>{cart.title}</p>
                        </div>
                        <div className='details'>
                          <p><strong>Rs.</strong>{cart.price}</p>
                          <p><strong>Count:</strong>{cart.amount}</p>
                        </div>
                        <div className='buttons'>
                            <button onClick={()=>handlechange(cart,1)}>+</button>
                            <button onClick={()=>handlechange(cart,-1)}>-</button>
                            <button onClick={()=>handleremove(cart.id)}className='Rembtn' >Remove</button>
                        </div>
                    </div>
                    
                ))}
                <div className='total'>
                  <p><strong>Total: Rs.</strong>{price}</p>
                </div>
        </div>
    </div>
  )
}

export default Cart