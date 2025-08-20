import { createSlice } from "@reduxjs/toolkit";

// 🛒 استرجاع من localStorage إذا موجود
const savedCart = JSON.parse(localStorage.getItem("cartState"));

const initialState = savedCart || {
  items: [], 
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      state.totalQuantity++;
      state.totalPrice += product.price;

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    incrementQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },

    decrementQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(i => i.id !== id);
        state.totalQuantity--;
        state.totalPrice -= item.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart, removeItem } = cartSlice.actions;

export default (state, action) => {
  const newState = cartSlice.reducer(state, action);
  localStorage.setItem("cartState", JSON.stringify(newState));
  return newState;
};
