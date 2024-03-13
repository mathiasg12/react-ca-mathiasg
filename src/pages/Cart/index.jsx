import { formatPrice } from '../../js/formatPrice';
import { useCartStore } from '../../states/cart';
import { CheckOutBtn } from '../../components/CheckOutBtn';
import styles from './cart.module.css';
import { AddAndRemoveBtn } from '../../components/AddAndRemoveBtn';
/**
 * component that returns the cart page
 * @returns the main of the cart page
 */
export function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.total);
  console.log(cart);
  console.log(total);
  return (
    <main>
      <h1>Cart</h1>
      <section className={styles.cartSection}>
        {cart.map((cartItems) => (
          <div id={cartItems.id} className={styles.cartItem} key={cartItems.id}>
            <div className={styles.flexRow1}>
              <div className={styles.imgWrapper}>
                <img
                  className={styles.img}
                  alt="product image"
                  src={cartItems.image.url}
                ></img>
              </div>
              <h2 className={styles.title}>{cartItems.title}</h2>
            </div>
            <div className={styles.flexRow2}>
              <AddAndRemoveBtn product={cartItems}></AddAndRemoveBtn>
              <div>
                <p>
                  ${formatPrice(cartItems.discountedPrice * cartItems.quantity)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className={styles.checkOutSection}>
        <h2 className={styles.total}>Total: ${formatPrice(total)}</h2>
        <CheckOutBtn></CheckOutBtn>
      </section>
    </main>
  );
}
