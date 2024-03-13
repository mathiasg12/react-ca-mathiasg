import { create } from 'zustand';
/**
 * a store created with zustand, to contain the cart state, the cart store contains an array of the added products, quantity of products and the total amount in the cart. the cart store
 * can add items, remove items, change the total, and clear the cart
 */
export const useCartStore = create((set) => ({
  cart: [],
  total: 0,
  quantityInCart: 0,
  addProduct: (product) => {
    set((state) => {
      const productAlreadyInCart = state.cart.findIndex(
        (item) => item.id === product.id
      );
      const updatedQuantity = state.quantityInCart + 1;
      if (productAlreadyInCart !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[productAlreadyInCart].quantity++;
        return { cart: updatedCart, quantityInCart: updatedQuantity };
      } else {
        const updatedCart = [...state.cart, { ...product, quantity: 1 }];
        return { cart: updatedCart, quantityInCart: updatedQuantity };
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
      const updatedQuantity = state.quantityInCart - 1;
      const newCart = [...state.cart];
      if (newCart[findProductIndex].quantity > 1) {
        newCart[findProductIndex].quantity -= 1;
        return {
          cart: newCart,
          total: state.total - product.discountedPrice,
          quantityInCart: updatedQuantity,
        };
      } else {
        return {
          cart: newCart.filter((currentItem) => {
            return currentItem.id !== product.id;
          }),
          total: state.total - product.discountedPrice,
          quantityInCart: updatedQuantity,
        };
      }
    });
  },
  clearCart: () => set(() => ({ cart: [], total: 0, quantityInCart: 0 })),
}));
