/**
 * function that calculates the price difference between the discounted price and the normal price (returns the difference in percent)
 * @param {number} orgPrice
 * @param {number} discPrice
 * @returns {number} the price difference in percent
 */
export function calculatePriceDif(orgPrice, discPrice) {
  const priceDifferenceInPercent = ((orgPrice - discPrice) / orgPrice) * 100;
  return priceDifferenceInPercent;
}
