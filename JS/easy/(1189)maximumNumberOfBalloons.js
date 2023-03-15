/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const count = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let letter of text) {
    if (letter in count) {
      count[letter] = count[letter] + 1;
    }
  }
  const lCount = Math.trunc(count.l / 2);
  const oCount = Math.trunc(count.o / 2);
  return Math.min(count.b, count.a, count.n, lCount, oCount);
};
