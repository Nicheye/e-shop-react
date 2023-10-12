import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import {CartItem} from './cartItem'
import {useNavigate} from 'react-router-dom'
import './cart.css'
export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAMount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
	  <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>
    {totalAMount >0 ?
      <div className='checkout'>
        
        <p className='subtotal_title'>Subtotal: ${totalAMount}</p>
        <button onClick={() => navigate("/")}>continue shopping</button>
        <button>Ckeckout</button>
      </div>
    : <h1> Your Cart is empty </h1>}
    </div>
  )
}
