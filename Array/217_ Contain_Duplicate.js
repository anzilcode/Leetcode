// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let exist = new Set()
    for(let num of nums){
        if(exist.has(num)){
            return true
        }
        exist.add(num)
    }
    return false
};
