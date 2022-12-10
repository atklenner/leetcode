/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = {};
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        map[jewels[i]] = 1;
    }
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] in map) count++;
    }
    return count;
};
