import React, { useEffect, useState } from 'react';
export function useFetchProducts(URL) {
  const [products, setProducts] = useState([]);
  const [newError, setNewError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function innerFunction() {
      try {
        setNewError(false);
        setLoading(true);
        let fetchProducts = await fetch(URL);
        let productsJson = await fetchProducts.json();
        setProducts(productsJson);
      } catch (error) {
        console.log(error);
        setNewError(true);
      } finally {
        setLoading(false);
      }
    }
    innerFunction();
  }, [URL]);
  return { products, newError, loading };
}
