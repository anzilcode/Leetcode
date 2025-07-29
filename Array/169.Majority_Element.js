// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = new Map();
    let maxCount = 0;
    let maxNum = nums[0];

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);

        if (freq.get(num) > maxCount) {
            maxCount = freq.get(num);
            maxNum = num;
        }
    }

    return maxNum;
}
