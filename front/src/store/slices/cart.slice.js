import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const getCartThunk = () => (dispatch) => {
  // Aquí puedes cargar el carrito de compras desde el localStorage u otra fuente local
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  dispatch(setCart(cart));
};

export const addCartThunk = (product) => (dispatch,getState) => {
  dispatch(addToCart(product));
  // Guardamos el carrito actualizado en el localStorage
  localStorage.setItem("cart", JSON.stringify(getState().cart));
};

export const removeFromCartThunk = (productId) => (dispatch,getState) => {
  dispatch(removeFromCart(productId));
  // Guardamos el carrito actualizado en el localStorage
  localStorage.setItem("cart", JSON.stringify(getState().cart));
};

export const checkOutThunk = () => (dispatch,getState) => {
  // Agregamos la nueva compra a el storage
  localStorage.setItem("purchases", JSON.stringify(getState().cart));
  dispatch(clearCart());
  // Eliminamos el carrito del localStorage
  localStorage.removeItem("cart");
};

export const { setCart, addToCart, removeFromCart, clearCart } = cart.actions;

export default cart.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { setIsLoading } from "./isLoading.slice";
// import axios from "axios";
// import getConfig from "../../utils/getConfig";
// export const cart = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     setcart: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const getCartThunk = () => (dispatch) => {
//   dispatch(setIsLoading(true));
//   return axios
//     .get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
//     .then((res) => dispatch(setcart(res.data.data.cart.products)))
//     .finally(() => dispatch(setIsLoading(false)));
// };

// export const addCartThunk = (newCart) => (dispatch) => {
//   dispatch(setIsLoading(true));
//   return axios
//     .post(
//       "https://e-commerce-api.academlo.tech/api/v1/cart",
//       newCart,
//       getConfig()
//     )
//     .then((res) => dispatch(getCartThunk()))
//     .finally(() => dispatch(setIsLoading(false)))
//     .catch((error) => console.log(error.response?.data));
// };

// export const checkOutThunk = () => (dispatch) => {
//   dispatch(setIsLoading(true));
//   return axios
//     .post(
//       "https://e-commerce-api.academlo.tech/api/v1/purchases",
//       {},
//       getConfig()
//     )
//     .then((res) => dispatch(setcart([])))
//     .finally(() => dispatch(setIsLoading(false)));
// };

// export const removeFromCartThunk = (productId) => (dispatch) => {
//   dispatch(setIsLoading(true));
//   return axios
//     .delete(
//       `https://e-commerce-api.academlo.tech/api/v1/cart/${productId}`,
//       getConfig()
//     )
//     .then(() => dispatch(getCartThunk()))
//     .finally(() => setIsLoading(false));
// };

// export const { setcart } = cart.actions;

// export default cart.reducer;
