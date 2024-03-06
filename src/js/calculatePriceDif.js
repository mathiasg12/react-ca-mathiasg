/**
 * function that calculates the price difference
 * @param {number} orgPrice
 * @param {number} discPrice
 * @returns {number} the price difference in percent
 */
export function calculatePriceDif(orgPrice, discPrice) {
  const priceDifferenceInPercent = ((orgPrice - discPrice) / orgPrice) * 100;
  return priceDifferenceInPercent;
}
