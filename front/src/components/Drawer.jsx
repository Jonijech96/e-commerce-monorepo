import React from "react";

const Drawer = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="cart-drawer" className="drawer-overlay"></label>

      <div className="flex flex-col divide-y justify-between p-4 w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <h2 className="font-bold text-xl">Carrito de Compras</h2>
        <div className="checkout-section py-4 px-2 ">
          <div className="total flex justify-between mb-4">
            <span className="">total</span>
            <b>$0</b>
          </div>
          <button className="btn btn-block">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
