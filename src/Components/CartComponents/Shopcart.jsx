import React from 'react';
import "../Styles/Shopcart.css"
const Shopcart = ({item,handleclick}) => {
    if(item){
        const {title,price,img}= item;

        return (
          <div className='cards'>
              <div className='image_box'>
                  <div className='details'>
                            <img src={img} alt="" />
                          <p>{title}</p>
                          <p><strong>Price:</strong>Rs.{price}</p>
                          <div className='btn'>
                          <button onClick={()=>handleclick(item)}>Add to Cart</button>
                          </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default Shopcart