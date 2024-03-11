import { formatPrice } from '../../js/formatPrice';
import { useCartStore } from '../../states/cart';
import { CheckOutBtn } from '../../components/CheckOutBtn';
import styles from './cart.module.css';
import { AddAndRemoveBtn } from '../../components/AddAndRemoveBtn';

export function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.total);
  const removeItem = useCartStore((state) => state.removeProduct);
  console.log(cart);
  console.log(total);
  return (
    <main>
      <h1>Cart</h1>
      <section>
        {cart.map((cartItems) => (
          <div id={cartItems.id} className={styles.cartItem}>
            <div className={styles.flexRow1}>
              <div className={styles.imgWrapper}>
                <img
                  className={styles.img}
                  alt="product image"
                  src={cartItems.imageUrl}
                ></img>
              </div>
              <h2>{cartItems.title}</h2>
            </div>
            <div className={styles.flexRow2}>
              <AddAndRemoveBtn object={cartItems}></AddAndRemoveBtn>
              <div>
                <p>${cartItems.discountedPrice * cartItems.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h2 className={styles.total}>Total: ${formatPrice(total)}</h2>
        <CheckOutBtn></CheckOutBtn>
      </section>
    </main>
  );
}
