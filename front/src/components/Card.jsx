import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="card w-72  sm:w-72 bg-base-100 shadow-md divide-y hover:shadow-xl ">
        <figure className="h-64">
          <img src={product.image} alt="Shoes" className="h-4/5	" />
        </figure>
        <div className="card-body h-64">
          <div className="badge badge-outline">{product.category}</div>

          <h2 className="card-title">{product.title}</h2>
          <span className="text-slate-500">Price</span>
          <p className="font-bold">${product.price}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;
