import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import styles from './CheckoutSuccessPage.module.css';
import { ContinueBtn } from '../../components/ContinueBtn';
/**
 * component that creates the checkout success page, including a heading, icon, paragraph and a continue button that takes the user back to the homepage
 * @returns the checkout success page
 */
export function CheckoutSuccessPage() {
  return (
    <main>
      <div className={styles.CheckoutSuccessContainer}>
        <h1>Thank you for your order</h1>
        <FontAwesomeIcon icon={faTruck} className={styles.truck} />
        <p>
          Your order has been successfully placed and will be shipped out as
          soon as possible. Thank you for choosing to shop with us.
        </p>
        <ContinueBtn></ContinueBtn>
      </div>
    </main>
  );
}
