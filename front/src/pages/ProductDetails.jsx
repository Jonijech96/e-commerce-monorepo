import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card';
import Carrousel from '../components/Carrousel';
import { addCartThunk } from '../store/slices/cart.slice';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [inputCart, setInputCart] = useState(1);
  
  useEffect(()=>{
    dispatch(getProductsThunk())
  },[])
  const {id} = useParams();
  const productsList = useSelector(state=>state.products);
  const product = productsList.find(productItem=>productItem.id === Number(id))
  const addToCart = () => {
    const cartItem = {
      id: product.id,
      quantity: inputCart,
      price: product.price,
      title: product.title,
    };
    dispatch(addCartThunk(cartItem));
    setInputCart(1);
  };
  const productsCategories = productsList.filter(productItem=> productItem.category == product.category && productItem.id !== product.id);

  return (
    <div>
      <div className="px-4 text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>{product.title}</li>
        </ul>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product.image} className="max-w-sm rounded-lg shadow-2xl" />
          {/* <Carrousel arrayImage={product.productImgs}/> */}
          <div className='	w-4/5 sm:w-1/2'>
          <div className="badge badge-outline">{product.category}</div>

            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="py-4">{product.description}</p>
            <p className='font-bold py-6'>${product.price}</p>
            <input
              type="number"
              className="pl-4 py-2 rounded-lg"
              value={inputCart}
              onChange={(e) => setInputCart(e.target.value)}
            />
            <button
              onClick={()=>addToCart(product.id)}
              className="btn btn-primary gap-2"
            >
              Add to Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h3 className="font-bold">discover similar items</h3>
        <ul className="flex flex-wrap justify-center gap-3 py-6">
          {productsCategories.map((productItem,index) => (
            <li key={index}>
              <Card product={productItem} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductDetails