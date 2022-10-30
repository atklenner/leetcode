/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowest = prices[0];
  let profit = 0;
  for (let price of prices) {
    if (price < lowest) {
      lowest = price;
    } else if (price - lowest > profit) {
      profit = price - lowest;
    }
  }
  return profit;
};
