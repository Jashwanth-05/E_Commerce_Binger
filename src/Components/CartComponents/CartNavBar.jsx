import React from 'react';
import "../Styles/CartNavBar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartNavBar = ({Setshow,size}) => {
  return (
        <div className='Navbox'>
            <span className='Shop' onClick={()=>Setshow(true)}>My Shop</span>
            <div className='Cart'>
                <span>
                    <ShoppingCartIcon onClick={()=>Setshow(false)} />
                </span>
                <span>
                    {size}
                </span>
            </div>
        </div>
  )
}

export default CartNavBar