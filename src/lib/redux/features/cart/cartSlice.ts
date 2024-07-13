import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Product } from "@/interfaces/Product";
export interface CartState {
  id: string[];
  cart: { [key: string]: Product & { quantity: number; amount: number } };
}
const initialState: CartState = {
  id: [],
  cart: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product & { amount: number }>) => {
      state.cart[action.payload.id] = { ...action.payload, quantity: 1 };
      state.id.push(action.payload.id);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state.cart[action.payload];
      state.id = state.id.filter((id) => id !== action.payload);
    },
    increaseQuantityByOne: (state, action: PayloadAction<string>) => {
      state.cart[action.payload].quantity += 1;
    },
    decreaseQuantityByOne: (state, action: PayloadAction<string>) => {
      if (state.cart[action.payload].quantity > 1) {
        state.cart[action.payload].quantity -= 1;
      }
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      state.cart[action.payload.id].quantity += action.payload.amount;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantityByOne,
  increaseQuantityByOne,
  changeQuantity,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cartReducer;
export const selectCartItems = (state: RootState) => state.cartReducer.cart;
export const selectCartIds = (state: RootState) => state.cartReducer.id;
export const selectCartTotal = (state: RootState) =>
  state.cartReducer.id.length;
export const selectCartTotalPrice = (state: RootState) => {
  const amounts = state.cartReducer.id.map(
    (id) =>
      state.cartReducer.cart[id].amount * state.cartReducer.cart[id].quantity
  );
  return amounts.reduce((acc, curr) => acc + curr, 0);
};

export default cartSlice.reducer;
