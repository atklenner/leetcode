/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // use an array as a stack
  let stack = [];
  // keep a map of the openers and closers
  let map = { "(": ")", "[": "]", "{": "}" };
  // loop through string s
  for (let char of s) {
    // if char is opening, add it to the stack
    if (char in map) {
      stack.push(char);
    } else if (map[stack[stack.length - 1]] !== char) {
      // if char is closing check if the top of the stack has the corresponding opener
      return false;
    } else {
      // otherwise pop of the top of the stack
      stack.pop();
    }
  }
  // check if anything left on stack
  return stack.length === 0;
};
