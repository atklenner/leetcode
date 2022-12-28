/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // create an empty array
  let array = [];
  // loop n + 1 times
  for (let i = 0; i <= n; i++) {
    // for each value of i, turn it into a string of base 2, using toString()
    let stringInt = i.toString(2);
    // count the number of 1's using reduce
    let count = stringInt.split("").reduce((acc, cur) => {
      if (cur === "1") return acc + 1;
      return acc;
    }, 0);
    // push that count into the array
    array.push(count);
  }
  return array;
};
