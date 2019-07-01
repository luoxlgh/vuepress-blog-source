/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteInner = (arr, index, res) => {
    index === arr.length && (res.push([].concat(arr)));
    const map = {};
    for (let i = index; i < arr.length; ++i) {
        if (i > index) {
            if (map[arr[i]] || arr[index] === arr[i]) {
                continue;
            } else {
                map[arr[i]] = 1;
            }
        }
        [arr[index], arr[i]] = [arr[i], arr[index]];
        permuteInner(arr, index + 1, res);
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }
}
var permuteUnique = function(nums) {
    const res = [];
    permuteInner(nums, 0, res);
    return res;
};
