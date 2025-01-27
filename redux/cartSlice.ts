import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadCartFromLocalStorage, loadWishlistFromLocalStorage, saveCartToLocalStorage, saveWishlistToLocalStorage } from '@/app/utils/localstorage';

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  wishlist: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  ...loadCartFromLocalStorage(), // Load both items and totalQuantity from localStorage
  wishlist: loadWishlistFromLocalStorage(), // Load wishlist from localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Recalculate total quantity
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      saveCartToLocalStorage({ items: state.items, totalQuantity: state.totalQuantity }); // Save both to localStorage
    },

    updateCartItem(state, action: PayloadAction<CartItem>) {
      const index = state.items.findIndex(item => item._id === action.payload._id);
      if (index !== -1) {
        state.items[index] = action.payload;
        // Recalculate total quantity
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        saveCartToLocalStorage({ items: state.items, totalQuantity: state.totalQuantity }); // Save both to localStorage
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item._id !== action.payload);
      // Recalculate total quantity
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      saveCartToLocalStorage({ items: state.items, totalQuantity: state.totalQuantity }); // Save both to localStorage
    },

    // Add item to wishlist
    addToWishlist(state, action: PayloadAction<CartItem>) {
      if (!state.wishlist.some(item => item._id === action.payload._id)) {
        state.wishlist.push(action.payload);
        saveWishlistToLocalStorage(state.wishlist); // Save to localStorage
      }
    },

    // Remove item from wishlist
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.wishlist = state.wishlist.filter(item => item._id !== action.payload);
      saveWishlistToLocalStorage(state.wishlist); // Save to localStorage
    },
  },
});

export const { addToCart, updateCartItem, removeFromCart, addToWishlist, removeFromWishlist } = cartSlice.actions;
export default cartSlice.reducer;
