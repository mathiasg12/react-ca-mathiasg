/**
 * function that filters thrue an array and returns a new array that matches the conditions
 * @param {array} array
 * @returns {array}
 */
export function search(array, searchValue) {
  const searchedProducts = array.filter((search) => {
    let title = search.title;
    if (title.toLowerCase().includes(searchValue)) {
      return true;
    }
  });
  console.log(searchedProducts);
  return searchedProducts;
}
