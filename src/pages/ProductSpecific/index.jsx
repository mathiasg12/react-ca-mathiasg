import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../../hooks/FetchProducts';
import styles from './specificProduct.module.css';
import { DisplayPrice } from '../../components/ProductPrice';
import { BuyBtn } from '../../components/BuyBtn';
import { Reviews } from '../../components/Reviews';

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
        <h1>{title}</h1>
        <div className={styles.imgWrapper}>
          <img src={imageUrl} className={styles.img} alt="product image"></img>
        </div>
        <div>
          <p>{description}</p>
          <p>Rating {rating}/5</p>
        </div>
        <DisplayPrice priceA={price} priceB={discountedPrice}></DisplayPrice>
        <BuyBtn></BuyBtn>
        <Reviews array={reviews}></Reviews>
      </main>
    );
  }
}
