const CART_KEY = "cart";
const WISHLIST_KEY = "wishlist";

export const loadFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const savedState = localStorage.getItem(key);
    if (savedState) {
      return JSON.parse(savedState);
    }
  }
  return null;
};

export const saveToLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const loadCartFromLocalStorage = () => {
  const cart = loadFromLocalStorage(CART_KEY);
  return cart ? cart : { items: [], totalQuantity: 0 };
};

export const loadWishlistFromLocalStorage = () => {
  const wishlist = loadFromLocalStorage(WISHLIST_KEY);
  return wishlist ? wishlist.items : [];
};

export const saveCartToLocalStorage = (cartState: {
  items: any[];
  totalQuantity: number;
}) => {
  saveToLocalStorage(CART_KEY, cartState);
};

export const saveWishlistToLocalStorage = (wishlistItems: any[]) => {
  saveToLocalStorage(WISHLIST_KEY, { items: wishlistItems });
};

export const loadCompareFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const compare = localStorage.getItem("compare");
    return compare ? JSON.parse(compare) : [];
  }
  return [];
};

export const saveCompareToLocalStorage = (compare: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("compare", JSON.stringify(compare));
  }
};
