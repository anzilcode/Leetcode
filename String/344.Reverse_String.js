// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length-1;

    while(start<end){
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp

        start++
        end--
    }
    return s
};
