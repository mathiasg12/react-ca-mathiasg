import styles from './FormSentOverlay.module.css';
/**
 * component that creates the overlay telling the user that the form was successfully submited
 * @param {object} props
 */
export function FormSentOverlay(props) {
  const { state, click } = props;
  return (
    <div className={`${styles.overlay} ${state ? styles.visible : ''}`}>
      <div className={styles.xBtn} onClick={click}>
        x
      </div>
      <h2>Your message has been successfully sent</h2>
      <p>
        Thank you for your message, we will respond as fast as possible and
        within 1-3 days
      </p>
    </div>
  );
}
