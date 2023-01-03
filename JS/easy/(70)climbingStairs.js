/**
 * @param {number} n
 * @return {number}
 */

function climb(n, cache) {
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
}

var climbStairs = function(n) {
  let cache = {0: 1, 1: 1};
  climb(n, cache);
  return cache[n];
};
