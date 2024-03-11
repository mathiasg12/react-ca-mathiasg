import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  total: 0,
  addProduct: (product) => {
    set((state) => {
      const productAlreadyInCart = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (productAlreadyInCart !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[productAlreadyInCart].quantity++;
        console.log('Updated Cart:', [...state.cart, product]);
        return { cart: updatedCart };
      } else {
        const updatedCart = [...state.cart, { ...product, quantity: 1 }];
        console.log('Updated Cart:', [...state.cart, product]);
        return { cart: updatedCart };
      }
    });
  },
  changeTotal: (price) => {
    set((state) => ({
      total: (state.total += price),
    }));
  },
  removeProduct: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
      total:
        state.total -
        state.cart.find((item) => item.id === productId).discountedPrice,
    }));
  },
  clearCart: () => set(() => ({ cart: [] })),
}));
