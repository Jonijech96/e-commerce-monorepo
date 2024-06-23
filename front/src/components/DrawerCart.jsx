import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkOutThunk, getCartThunk, removeFromCartThunk } from '../store/slices/cart.slice';
import Cart from './Cart'

const DrawerCart = () => {
  const dispatch = useDispatch();
  let priceTotal = 0;
  const addPriceTotal = (newPrice)=>{
    priceTotal += newPrice;
  }
  useEffect(() => {
    dispatch(getCartThunk())
  }, [])
  const cart = useSelector(state=>state.cart);
  return (
    <div className="drawer-side">
      <label htmlFor="cart-drawer" className="drawer-overlay"></label>

      <div className="flex flex-col divide-y justify-between p-4 w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <h2 className="font-bold text-xl">Carrito de Compras</h2>
        <div className="cart">
        { 

        cart.map((cartItem,index)=>(
          <li key={index} className='flex items-center justify-between'>
            <div className="cart-details">

          <p>{cartItem.title}</p>
          <p>quantity: {cartItem.quantity}</p>
          <p>price c/u: {cartItem.price}</p>
          <p>subtotal: {Number(cartItem.price) * cartItem.quantity}</p>
          {addPriceTotal(Number(cartItem.price) * cartItem.quantity)}
            </div>
            <button onClick={()=>dispatch(removeFromCartThunk(cartItem.id))} className="button-delete">
            <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </button>
          </li>
          
        ) )

        }
        </div>
        <div className="checkout-section py-4 px-2 ">
          <div className="total flex justify-between mb-4">
            
            <span className="">total</span>
            <b>${priceTotal}</b>
          </div>
          <button className="btn btn-block" onClick={()=>dispatch(checkOutThunk())}>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default DrawerCart