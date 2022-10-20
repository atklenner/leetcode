// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// an array of arrays which contain numbers, are they positive, 0, negative?

// return the total array sum that is largest

// [[1], [2], [3]] => 3
// [[99], [1, 2, 3]] => 99
// [[1, 2, 3], [7, 8], [1, 1, 1]] => 15

function maximumWealth(accounts) {
  // loop through outer array
  // map it to a new array
  // each value in the new array will be the sum of the sub-array
  // use reduce to find that sum
  // return Math.max(mapped array)
  // let totals = accounts.map((account) => {
  //   return account.reduce((acc, cur) => acc + cur, 0);
  // })
  // return Math.max(...totals)
  // shortened version
  return Math.max(
    ...accounts.map((account) => account.reduce((acc, cur) => acc + cur, 0))
  );
}
