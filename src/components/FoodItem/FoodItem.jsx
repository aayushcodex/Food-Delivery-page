import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({Id,name,price,description,image}) => {
  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    // console.log("Current cartItem:", cartItems);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img  className='food-item-image'src={image} alt="" />
            {!cartItems[Id]
              ?<img className='add' onClick={() =>addToCart(Id)} src={assets.add_icon_white} alt="" />
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(Id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[Id]}</p>
                <img onClick={()=>addToCart(Id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">₹{price}</p>
            <p></p>
        </div>
        
    </div>
  )
}

export default FoodItem


// 1:43:25 //
// 1:32:35 //