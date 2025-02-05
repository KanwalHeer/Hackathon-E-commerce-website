import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadCartFromLocalStorage, loadWishlistFromLocalStorage, saveCartToLocalStorage, saveWishlistToLocalStorage,loadCompareFromLocalStorage, saveCompareToLocalStorage } from '@/app/utils/localstorage';

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
  compare: CartItem[];
}

const initialState: CartState = {
  ...loadCartFromLocalStorage(),
  wishlist: loadWishlistFromLocalStorage(), 
  compare: loadCompareFromLocalStorage()
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
      saveCartToLocalStorage({ items: state.items, totalQuantity: state.totalQuantity });
    },

    updateCartItem(state, action: PayloadAction<CartItem>) {
      const index = state.items.findIndex(item => item._id === action.payload._id);
      if (index !== -1) {
        state.items[index] = action.payload;
        // Recalculate total quantity
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        saveCartToLocalStorage({ items: state.items, totalQuantity: state.totalQuantity }); 
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item._id !== action.payload);
      // Recalculate total quantity
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      saveCartToLocalStorage({ items: state.items, totalQuantity: state.totalQuantity });     },

    // Add item to wishlist
    addToWishlist(state, action: PayloadAction<CartItem>) {
      if (!state.wishlist.some(item => item._id === action.payload._id)) {
        state.wishlist.push(action.payload);
        saveWishlistToLocalStorage(state.wishlist); 
      }
    },

    // Remove item from wishlist
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.wishlist = state.wishlist.filter(item => item._id !== action.payload);
      saveWishlistToLocalStorage(state.wishlist);
    },
    // Add product to compare list
    addToCompare(state, action: PayloadAction<CartItem>) {
      if (!state.compare.some(item => item._id === action.payload._id)) {
        state.compare.push(action.payload);
        saveCompareToLocalStorage(state.compare); 
      }
    },

    // Remove product from compare list
    removeFromCompare(state, action: PayloadAction<string>) {
      state.compare = state.compare.filter(item => item._id !== action.payload);
      saveCompareToLocalStorage(state.compare); 
    },

    // Clear all products from the compare list
    clearCompare(state) {
      state.compare = [];
      saveCompareToLocalStorage(state.compare); 
    },
  },
});

export const { addToCart, updateCartItem, removeFromCart, addToWishlist, removeFromWishlist,addToCompare,removeFromCompare,clearCompare } = cartSlice.actions;
export default cartSlice.reducer;
