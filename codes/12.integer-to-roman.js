/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (num <= 0)
        return '';
    const valueArr = [1000, 500, 100, 50, 10, 5, 1];
    const symbolArr = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    const res = [];
    for(let i = 0; i < valueArr.length; i += 2) {
        let temp = num/valueArr[i] >>> 0;
        if (temp === 4) {
            res.push(symbolArr[i] + symbolArr[i-1]);
        } else if (temp === 9) {
            res.push(symbolArr[i] + symbolArr[i-2]);
        } else if (temp === 5) {
            res.push(symbolArr[i-1]);
        } else {
            let temp1 = temp - 5;
            if (temp1 < 0) {
                while (temp-- > 0) {
                    res.push(symbolArr[i]);
                }
            } else {
                res.push(symbolArr[i-1]);
                while (temp1-- > 0) {
                    res.push(symbolArr[i]);
                }
            }
        }
        num = num%valueArr[i];
    }
    return res.join("");
};

