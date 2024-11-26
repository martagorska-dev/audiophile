import { createSlice } from "@reduxjs/toolkit";
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "../../utils/helpers";

const initialState = {
  cart: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.cart.push(action.payload);
      saveCartToLocalStorage(state.cart);
    },
    deleteProduct(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload,
      );
      saveCartToLocalStorage(state.cart);
    },
    increaseProductQuantity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );

      product.quantity++;
      product.totalPrice = product.quantity * product.unitPrice;
      saveCartToLocalStorage(state.cart);
    },
    decreaseProductQuantity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );

      product.quantity--;
      product.totalPrice = product.quantity * product.unitPrice;

      if (product.quantity === 0)
        cartSlice.caseReducers.deleteProduct(state, action);

      saveCartToLocalStorage(state.cart);
    },
    changeProductQuantity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload.id,
      );

      product.quantity += action.payload.quantity;
      product.totalPrice = product.quantity * product.unitPrice;
      saveCartToLocalStorage(state.cart);
    },
    clearCart(state) {
      state.cart = [];
      saveCartToLocalStorage(state.cart);
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  changeProductQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((product) => product.id === id)?.quantity ?? 0;
