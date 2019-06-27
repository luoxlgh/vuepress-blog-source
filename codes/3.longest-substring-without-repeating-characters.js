/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sArr = [...s];
    let left = -1;
    const map = new Map();
    let res = 0;
    for (let i = 0; i < sArr.length; ++i) {
        if (map.has(sArr[i])) {
            left = Math.max(left, map.get(sArr[i]));
        }
        res = Math.max(res, i - left);
        map.set(sArr[i], i);
    }
    return res;
};

