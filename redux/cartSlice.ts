import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  updateItems:any[];
  userData:any
}

const initialState: CartState = {
  items: [],
  updateItems :[],
  userData:{}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    updateCartItem(state, action: PayloadAction<CartItem>) {
      state.updateItems.push(action.payload);
    },
    userData(state, action: PayloadAction<any>) {
      state.userData = action.payload; // Directly assign object to user
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item._id !== action.payload);
    }
  }
});

export const { addToCart, updateCartItem, removeFromCart,userData } = cartSlice.actions;

export default cartSlice.reducer;
