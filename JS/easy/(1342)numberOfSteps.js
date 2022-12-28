// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// integer, positive, or zero

// return integer, 0 or greater

// numberOfSteps(0) => 0
// numberOfSteps(3) => 3
// numberOfSteps(4) => 3

function numberOfSteps(num) {
  // initialize a count to 0
  let count = 0;
  // start a while loop
  while (num > 0) {
    // check if num is even
    if (num % 2 === 0) {
      // then num = num / 2
      num = num / 2;
    } else {
      // else num = num - 1
      num = num - 1;
    }
    count++;
  }
  // return count when the while loop ends
  return count;
}

console.log(numberOfSteps(0));
console.log(numberOfSteps(3));
console.log(numberOfSteps(4));
