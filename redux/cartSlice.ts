import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  updateItems:any[]
}

const initialState: CartState = {
  items: [],
  updateItems :[],
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
    // updateCartItem(state, action: PayloadAction<{ productId: string; quantity: number }>) {
    //   const index = state.items.findIndex((item) => item._id === action.payload.productId);
    //   if (index !== -1) {
    //     state.items[index].quantity = action.payload.quantity;
    //   }
    // },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item._id !== action.payload);
    }
  }
});

export const { addToCart, updateCartItem, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
