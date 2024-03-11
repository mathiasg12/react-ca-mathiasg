import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../../hooks/FetchProducts';
import styles from './specificProduct.module.css';
import { DisplayPrice } from '../../components/ProductPrice';
import { BuyBtn } from '../../components/BuyBtn';
import { Reviews } from '../../components/Reviews';
import { formatPrice } from '../../js/formatPrice';

export function ProductSpecific() {
  const { id } = useParams();
  const { products, newError, loading } = useFetchProducts(
    'https://v2.api.noroff.dev/online-shop' + '/' + id
  );
  let singleProduct = products && products.data ? products.data : {};
  console.log(singleProduct);
  if (loading || !singleProduct) {
    return <div>Loading....</div>;
  }
  if (newError) {
    return <div>An error has occured please try again later</div>;
  }
  if (!loading) {
    console.log(singleProduct);
    const {
      id,
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
      <main>
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
