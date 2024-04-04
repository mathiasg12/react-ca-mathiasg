import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../../hooks/FetchProducts';
import styles from './specificProduct.module.css';
import { DisplayPrice } from '../../components/ProductPrice';
import { BuyBtn } from '../../components/BuyBtn';
import { Reviews } from '../../components/Reviews';
/**
 * function that returns jsx that contain the specific page for each product
 * @returns the product specific page
 */
export function ProductSpecific() {
  const { id } = useParams();
  const { products, newError, loading } = useFetchProducts(
    'https://v2.api.noroff.dev/online-shop' + '/' + id
  );
  let singleProduct = products && products.data ? products.data : {};
  if (loading || !singleProduct) {
    return (
      <main className={styles.specificMain}>
        <h2 className={styles.loading}>Loading....</h2>
      </main>
    );
  }
  if (newError) {
    return (
      <main className={styles.specificMain}>
        <h1>An error has occured please try again later</h1>
      </main>
    );
  }
  if (!loading) {
    const {
      title,
      description,
      image,
      price,
      rating,
      discountedPrice,
      reviews,
    } = singleProduct;
    const imageUrl = image && image.url ? image.url : '';
    return (
      <main className={styles.specificMain}>
        <section className={styles.productSection}>
          <div className={styles.imgWrapper}>
            <img
              src={imageUrl}
              className={styles.img}
              alt="product image"
            ></img>
          </div>
          <div className={styles.productInformationWrapper}>
            <h1>{title}</h1>
            <div className={styles.description}>
              <p>{description}</p>
              <p className={styles.rating}>Rating {rating}/5</p>
            </div>
            <div className={styles.price}>
              <DisplayPrice
                priceA={price}
                priceB={discountedPrice}
                className={styles.price}
              ></DisplayPrice>
            </div>
            <BuyBtn product={singleProduct}></BuyBtn>
          </div>
        </section>
        <Reviews array={reviews}></Reviews>
      </main>
    );
  }
}
