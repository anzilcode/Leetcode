// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        const diff = target - nums[i]
        if(map.has(diff)){
            return [map.get(diff),i]
        } 
        map.set(nums[i],i);
    }
};
