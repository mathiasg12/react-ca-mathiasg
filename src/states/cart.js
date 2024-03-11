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
      total: state.total + price,
    }));
  },
  removeProduct: (product) => {
    set((state) => {
      const findProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      const newCart = [...state.cart];
      if (newCart[findProductIndex].quantity > 1) {
        newCart[findProductIndex].quantity -= 1;
        return {
          cart: newCart,
          total: state.total - product.discountedPrice,
        };
      } else {
        return {
          cart: newCart.filter((currentItem) => {
            return currentItem.id !== product.id;
          }),
          total: state.total - product.discountedPrice,
        };
      }
    });
  },
  clearCart: () => set(() => ({ cart: [] })),
}));
