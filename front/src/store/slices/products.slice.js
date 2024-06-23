import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    filterPrice: (state, action) => {
      const { fromPrice, toPrice } = action.payload;

      return state.filter(
        (product) =>
          product.price > Number(fromPrice) && product.price < Number(toPrice)
      );
    },
  },
});

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get('https://fakestoreapi.com/products?limit=20')
    // .then((res) => console.log(res.data))
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductsThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://fakestoreapi.com/products/category/${id}`)
    // .get(`https://e-commerce-api.academlo.tech/api/v1/products/?category=${id}`)
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};
export const filterHeadlineThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products/?query=${id}`)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};
export const filterPriceThunk = (id, fromPrice, toPrice) => (dispatch) => {
  dispatch(setIsLoading(true));
  let url =
    id !== 0
      ? `https://e-commerce-api.academlo.tech/api/v1/products/?query=${id}`
      : "https://e-commerce-api.academlo.tech/api/v1/products";
  console.log(url);
  return axios
    .get(url)
    .then((res) => {
      dispatch(setProducts(res.data.data.products));
      dispatch(filterPrice({ fromPrice, toPrice }));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts, filterPrice } = products.actions;

export default products.reducer;
