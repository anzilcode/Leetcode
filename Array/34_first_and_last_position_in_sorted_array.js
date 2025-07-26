// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = -1;
    let end = -1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            if(start==-1){
                start = i
            }
            end = i;
        }
    }
    return [start,end];
};
