/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = [[1]];
  if (numRows > 1) {
    triangle.push([1, 1]);
  }
  for (let row = 3; row <= numRows; row++) {
    let newRow = [];
    for (let entry = 0; entry < row; entry++) {
      if (entry === 0 || entry === row - 1) {
        newRow.push(1);
      } else {
        newRow.push(triangle[row - 2][entry] + triangle[row - 2][entry - 1]);
      }
    }
    triangle.push(newRow);
  }
  return triangle;
};
