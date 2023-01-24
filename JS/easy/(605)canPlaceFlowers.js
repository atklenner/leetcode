/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let flowersRemaining = n;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      i++;
    } else if (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined){
      flowersRemaining--;
      i++;
    }
  }
  return flowersRemaining <= 0;
};
