import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
  const {id,productName,price,productImage} = props.data;
  const {addToCart,cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems[id]
  return (
	<div className='product_card'>
		<img src={productImage} className='card_image'></img>
		<div className='card_description'>
			<p> <b>{productName}</b></p>
			<p>$ {price} </p>
		</div>
		<button className='AddToCartBtn' onClick={() => addToCart(id) }>
			Add to my cart {cartItemAmount >0 && <> ({cartItemAmount}) </>}
			</button>
	</div>
  )
}
