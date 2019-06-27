/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length <= 1)
        return s;
    const arr = [...s];

    const res = [];
    for (let i = 0; i< arr.length; ++i) {
        res.push(new Array(arr.length));
    }
    let resStr = '';
    for (let j = 0;j < arr.length; ++j) {
        for (let k = 0; k < arr.length - j; ++k) {
            if (j === 0) {
                res[k][k] = true;
            } else if (j === 1){
                res[k][k+1] = arr[k] === arr[k+1];
            } else {
                res[k][j+k] = (arr[k] === arr[j+k]) && res[k+1][j+k-1];
            }
            if (res[k][j+k] && resStr.length < (j+1)) {
                resStr = s.slice(k, j+k+1);
            }
        }
    }
    return resStr;
};

