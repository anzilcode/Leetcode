// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
let count = 0;
    let myMaj = null;

    for (let num of nums) {
        if (count === 0) {
            myMaj = num;
        }
        count += (num === myMaj) ? 1 : -1;
    }

    return myMaj;
}
