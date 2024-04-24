import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItem.css'
const CartItems = () => {
    const {all_product,cartItem,removeToCart,getCartAmount} = useContext(ShopContext);
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
<p>Product</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{
        if(cartItem[e.id]>0){
            return  <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Rs {e.new_price * 20}</p>
                <button className="cartitems-quantity">{cartItem[e.id]}</button>
                <p>Rs {(e.new_price * cartItem[e.id]) * 20}</p>
                <img src={remove_icon} className='carticons-remove-icon' onClick={()=> {removeToCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
        }
        return null;
       })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
      
        <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>RS{getCartAmount()}</p>
        </div>
        <hr/>
        <div className="cartitems-total-item">
            <p>Shipping Fees</p>
            <p>Free</p>
        </div>
        <hr/>
        <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>Rs{getCartAmount()}
            </h3>
        </div>
        <button>PROCEED TO CHECKOUT</button>
       </div>
       <div className="cartitems-promocode">
       <p>If you have a promo code, Enter it here</p> 
       <div className="cartitems-promobox">
        <input type="text" placeholder='Enter Promo Code' />
        <button>Submit</button>
       </div>
    </div>
    </div>
    
    </div>
  )
}

export default CartItems