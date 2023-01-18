/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let temp = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > temp) {
      let temp2 = arr[i];
      arr[i] = temp;
      temp = temp2;
    } else {
      arr[i] = temp;
    }
  }
  return arr;
};
