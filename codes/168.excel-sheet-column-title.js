/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const arr = [];
    const acode = 'A'.charCodeAt();
    while(n > 0) {
        const temp = (n-1)%26;
        n = (n-1)/26 >>> 0;
        arr.unshift(String.fromCharCode(acode + temp));
    }
    return arr.join("");
};

