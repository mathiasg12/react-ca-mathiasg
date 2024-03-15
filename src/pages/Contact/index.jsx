import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import styles from './contactPage.module.css';
/**
 * component that returns jsx for the contact page
 * @returns contact page
 */
export function ContactPage() {
  return (
    <main>
      <h1>Contact us</h1>
      <section className={styles.contactInfo}>
        <p>
          Hey, got a question or need some help? just fill out the form below,
          and we'll get back to you as fast as possible. Whether it's about our
          products, orders, shipping, or anything else, we're here to help. The
          more info you give us, the better we can assist you. Looking forward
          to chatting with you.
        </p>
      </section>
      <section>
        <ContactForm></ContactForm>
      </section>
    </main>
  );
}
