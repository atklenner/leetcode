/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // calculate the majority or floor(nums.length / 2)
    // loop through nums
    // cache each value
    // if the count is greater than to the majority, return that value
    let majority = Math.floor(nums.length / 2);
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 0;
        let count = map[nums[i]] + 1;
        if (count > majority) return nums[i];
        map[nums[i]] = count;
    }
};
