import React from "react";
import { Link } from "react-router-dom";

const PurchaseItem = ({ purchase }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  // const date = new Date(purchase.createdAt).toLocaleDateString(
  //   "en-us",
  //   options
  // );

  return (
    <li className="border-2">
      <h3 className=" bg-base-300">
        <b>Purchase Date: </b>
        {/* {date} */}
      </h3>
      <ul>
          <Link to={`/products/${purchase.id}`} >
          <li className="bg-base-100 hover:bg-base-200">
            <h3>
              <b>Product: </b>
              {purchase.title}
            </h3>
            <h3>
              <b>Quantity: </b>
              {purchase.quantity}
            </h3>

            <h3>
              <b>Price: </b>${purchase.price}
            </h3>
          </li>
          </Link>
        {/* {purchase.cart.products.map((product) => (
          <Link to={`/products/${product.id}`} >
          <li className="bg-base-100 hover:bg-base-200">
            <h3>
              <b>Product: </b>
              {product.title}
            </h3>
            <h3>
              <b>Quantity: </b>
              {product.productsInCart.quantity}
            </h3>

            <h3>
              <b>Price: </b>${product.price}
            </h3>
          </li>
          </Link>
        ))} */}
      </ul>
    </li>
  );
};

export default PurchaseItem;
