/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
let dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function fill(image, row, column, color, ogColor) {
  // baseCases
  // off image grid
  if (
    row < 0 ||
    row >= image.length ||
    column < 0 ||
    column >= image[0].length
  ) {
    return;
  }

  // tile is wrong color
  if (image[row][column] !== ogColor) {
    return;
  }

  // pre
  image[row][column] = color;

  // recurse
  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i];
    let newRow = row + x;
    let newCol = column + y;
    fill(image, newRow, newCol, color, ogColor);
  }

  // post
  return;
}

var floodFill = function (image, sr, sc, color) {
  let ogColor = image[sr][sc];
  if (ogColor === color) return image;
  fill(image, sr, sc, color, ogColor);
  return image;
};
