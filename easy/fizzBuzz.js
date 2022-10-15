/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // create an empty array
  let arr = [];
  // loop from 1 to n
  for (let i = 1; i <= n; i++) {
    // test if divisible by 3
    if (i % 3 === 0) {
      // test if divisible by 3 and 5
      if (i % 5 === 0) {
        arr.push("FizzBuzz");
      } else {
        arr.push("Fizz");
      }
      // test if divisible by 5
    } else if (i % 5 === 0) {
      arr.push("Buzz");
      // else add String(n) to array
    } else {
      arr.push(String(i));
    }
  }
  return arr;
};
