import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartStore } from '../../states/cart';
import styles from './cart.module.css';
/**
 * the cart component incudes a cart symbol and a paragraph that contains the number of items in the cart
 */
export function Cart() {
  const quantityInCart = useCartStore((state) => state.quantityInCart);
  if (quantityInCart <= 0) {
    return (
      <div className={styles.cartIconWrapper}>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </div>
    );
  } else {
    return (
      <div className={styles.cartIconWrapper}>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        <p className={styles.quantityInCart}>{quantityInCart}</p>
      </div>
    );
  }
}
